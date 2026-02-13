import { Typography, Divider } from "@mui/material";

export default function DashboardHeader() {
    return (
        <>
            <Typography variant="h5" component="h1" sx={{ mb: 0.5 }}>
                Dashboard
            </Typography>
            <Divider sx={{ mb: 2, borderBottomWidth: 3 }} />
        </>
    )
}