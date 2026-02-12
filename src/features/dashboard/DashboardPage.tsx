import { useEffect, useState } from 'react'
import {
    Paper,
    Stack,
    Typography,
    Divider } from "@mui/material";
import { getDashboard, type Dashboard } from "../../api/famly";
import MembersList from './components/MembersList';
import BudgetsList from './components/BudgetsList';
import DebtsList from './components/DebtsList';
import DashboardSkeleton from "./components/DashboardSkeleton";
import ErrorBanner from './components/ErrorBanner';
import EmptyDataDisplay from './components/EmptyDataDisplay';

type Status = "idle" | "loading" | "success" | "error";

export default function DashboardPage() {
    const [status, setStatus] = useState<Status>("idle");
    const [data, setData] = useState<Dashboard | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        async function load() {
            setStatus('loading');
            setError('');
            
            try {
                const dashboard = await getDashboard();
                if (cancelled) return;
                setData(dashboard);
                setStatus("success");
            } catch (e: unknown) {
                if (cancelled) return;
                const errorMessage = e instanceof Error ? e.message : "unknown error";
                setError(errorMessage);
                setStatus("error");
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <Paper elevation={1} sx={{ mt: 2, p: 2, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={600}>
                Dashboard
            </Typography>


            <Divider sx={{ mb:2 }} />

            { status === "loading" && <DashboardSkeleton /> }

            { status === "error" && <ErrorBanner error={error} /> }

            { status === "success" && !data && <EmptyDataDisplay /> }

            { status === "success" && data && (
                <Stack spacing={2}>
                    <Typography variant="subtitle1" fontWeight={600}>
                        {data.householdName}
                    </Typography>
                    <MembersList members={data.members} />
                    <BudgetsList budgets={data.budgets} />
                    <DebtsList debts={data.debts} />
                </Stack>
            )}
        </Paper>
    )
}