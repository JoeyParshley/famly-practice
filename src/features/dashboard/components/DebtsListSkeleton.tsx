import { Typography, Stack, Skeleton } from "@mui/material";

export default function DebtsListSkeleton() {
    return (
        <div>
            <Typography variant="subtitle2" fontWeight={600}>
                Debts
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 0.5 }}>
                {/* Show 3 skeleton debts */}
                {[1, 2, 3].map((i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="center">
                        <Skeleton variant="text" width={120} height={20} />
                        <Skeleton variant="text" width={20} height={20} />
                        <Skeleton variant="text" width={80} height={20} />
                        <Skeleton variant="text" width={20} height={20} />
                        <Skeleton variant="text" width={40} height={20} />
                    </Stack>
                ))}
            </Stack>
        </div>
    );
}