import { Typography } from "@mui/material";

export default function HouseholdTitle({ name }: { name: string }) {
    return (
        <Typography variant="h6" component="h2" sx={{ letterSpacing: 0.3 }}>
            {name}
        </Typography>
    )
}