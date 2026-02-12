import { Container } from "@mui/material"
import DashboardPage from "../features/dashboard/DashboardPage";
import AppHeader from "./AppHeader";
import EnvironmentBadge from "./EnvironmentBadge";


export default function AppShell() {

    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            <AppHeader />
            {import.meta.env.DEV && <EnvironmentBadge />}
            <DashboardPage />
        </Container>
    )
}