import { Stack } from "@mui/material";
import { type Dashboard } from "../../../api/famly";
import MembersList from "../components/MembersList";
import BudgetsList from "../components/BudgetsList";
import DebtsList from "../components/DebtsList";
import HouseholdTitle from "./HouseholdTitle";

export default function DashboardContent({ data }: { data: Dashboard }) {
    return (
        <Stack spacing={2}>
            <HouseholdTitle name={data.householdName} />
            {data.members.length > 0  && <MembersList members={data.members} />}
            {data.budgets.length > 0 && <BudgetsList budgets={data.budgets} />}
            {data.debts.length > 0 && <DebtsList debts={data.debts} />}
        </Stack>
    )
}