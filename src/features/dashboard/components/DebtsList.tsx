import { Typography, Stack } from "@mui/material";
import { type Debt } from "../../../api/famly";

export default function DebtsList({ debts }: { debts: Debt[] }) {
    return (
        <div>
            <Typography variant="subtitle2" fontWeight={600}>
                Debts
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 0.5 }}>
                {debts.map((debt: Debt) => (
                    <Typography key={debt.id} variant="body2">
                        <b>{debt.name}</b> - ${debt.balance.toLocaleString()} - {(debt.apr * 100).toFixed(1)}%
                    </Typography>
                ))}
            </Stack>
        </div>
    )
}