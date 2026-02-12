import { Paper, Divider, Alert } from "@mui/material";

export default function EmptyDataDisplay(){
    return (
    <Paper elevation={1} sx={{ mt: 2, p: 2, borderRadius: 3 }}>
        <Divider sx={{ mb:2 }} />
        <Alert severity="info">No dashboard data available.</Alert>
    </Paper>    
    )
}