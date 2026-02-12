import { Typography, Divider } from "@mui/material";

export default function DashboardHeader() {
    return (
        <>
            <Typography variant="h6" fontWeight={600}>
                Dashboard
            </Typography>


            <Divider sx={{ mb:2 }} />
        </>
    )
}