import { Typography } from "@mui/material";
import { API_MODE, API_BASE_URL } from "../api/http"

export default function EnvironmentBadge() {
    return (
        <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 2, display: "block" }}
        >
            API Mode: <b>{API_MODE}</b> • Base URL: <b>{API_BASE_URL}</b>
        </Typography>
    );
}