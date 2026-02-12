import { Paper } from "@mui/material";
import DashboardSkeleton from "./components/DashboardSkeleton";
import ErrorBanner from './components/ErrorBanner';
import DashboardHeader from  "./components/DashboardHeader";
import DashboardContent from "./components/DashboardContent";
import { useDashboard } from "./hooks/useDashboard"
import EmptyDataDisplay from "./components/EmptyDataDisplay";


export function DashboardPage() {
    const { status, data, error, isEmpty } = useDashboard();

        return (
        <Paper elevation={1} sx={{ mt: 2, p: 2, borderRadius: 3 }}>

            <DashboardHeader />

            {status === "loading" && <DashboardSkeleton />}

            {status === "error" && <ErrorBanner error={error} />}

            {status === "success" && isEmpty && <EmptyDataDisplay /> }

            {status === "success" && !isEmpty && <DashboardContent data={data!} />}
        </Paper>
    )
}