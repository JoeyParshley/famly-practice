import { Stack, CircularProgress, Typography } from "@mui/material"

export default function Spinner() {
    return (
        <Stack direction="row" spacing={1.5} alignItems="center">
            <CircularProgress size={18} />
            <Typography>Loading ...</Typography>
        </Stack>
    )
}
