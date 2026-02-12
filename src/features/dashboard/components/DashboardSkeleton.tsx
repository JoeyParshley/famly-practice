import { Stack, Divider, Skeleton } from "@mui/material";

export default function DashboardSkeleton() {
    return (
        <Stack spacing={2}>
            <Skeleton variant="text" width="40%" height={28} />
            <Divider />
            <Skeleton variant="rectangular" height={120} />
            <Skeleton variant="rectangular" height={120} />
            <Skeleton variant="rectangular" height={120} />
        </Stack>
    );
}