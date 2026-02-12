import { useEffect, useState } from 'react'
import { getDashboard, type Dashboard } from "../../../api/famly";

type Status = "idle" | "loading" | "success" | "error";

export function useDashboard() {
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

    return { 
        status,
        data,
        error,
        isEmpty: 
            !!data &&
            data.members.length === 0 &&
            data.budgets.length === 0 &&
            data.debts.length === 0,
    };

}