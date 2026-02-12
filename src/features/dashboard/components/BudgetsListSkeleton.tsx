import { Typography, Stack, Skeleton } from "@mui/material";

export default function BudgetsListSkeleton() {
    return (
        <div>
            <Typography variant="subtitle2" fontWeight={600}>
                Budgets
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 0.5 }}>
                {/* Show 2 skeleton budgets */}
                {[1, 2].map((i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="center">
                        <Skeleton variant="text" width={100} height={20} />
                        <Skeleton variant="text" width={20} height={20} />
                        <Skeleton variant="text" width={80} height={20} />
                    </Stack>
                ))}
            </Stack>
        </div>
    );
}