import { Alert } from "@mui/material";

export default function ErrorBanner({ error }: { error: string}) {
    return (
        <Alert severity="error">Error: {error}</Alert>
    )
}