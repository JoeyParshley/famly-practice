import { Stack, Box } from "@mui/material";
import { type Dashboard } from "../../../api/famly";
import MembersList from "../components/MembersList";
import BudgetsList from "../components/BudgetsList";
import DebtsList from "../components/DebtsList";
import HouseholdTitle from "./HouseholdTitle";

const sectionSx = {
    p: 2,
    border: "2px solid #1A1A1A",
    borderRadius: 2,
    boxShadow: "4px 4px 0 #1A1A1A",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
};

export default function DashboardContent({ data }: { data: Dashboard }) {
    return (
        <Stack spacing={2.5}>
            <HouseholdTitle name={data.householdName} />
            {data.members.length > 0 && (
                <Box component="section" sx={sectionSx}>
                    <MembersList members={data.members} />
                </Box>
            )}
            {data.budgets.length > 0 && (
                <Box component="section" sx={sectionSx}>
                    <BudgetsList budgets={data.budgets} />
                </Box>
            )}
            {data.debts.length > 0 && (
                <Box component="section" sx={sectionSx}>
                    <DebtsList debts={data.debts} />
                </Box>
            )}
        </Stack>
    )
}