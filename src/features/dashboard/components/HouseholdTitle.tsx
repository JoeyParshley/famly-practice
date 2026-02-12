import { Typography } from "@mui/material";

export default function HouseholdTitle({name}: { name: string }) {
    return (
        <Typography variant="subtitle1" fontWeight={600}>
            {name}
        </Typography>
    )
}