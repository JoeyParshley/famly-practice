
import { Typography, Stack } from "@mui/material"
import { type Budget } from "../../../api/famly"

export default function BudgetsList({ budgets }: { budgets: Budget[] }) {
    return (
        <div>
            <Typography variant="subtitle2" fontWeight={600}>
                Budgets
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 0.5 }}>
                {budgets.map((budget: Budget) => (
                    <Typography key={budget.id} variant="body2">
                        <b>{budget.category}</b> - {budget.actual} / {budget.planned}
                    </Typography>
                ))}
            </Stack>
        </div>
    );
}