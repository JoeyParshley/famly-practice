import { Container, CssBaseline, ThemeProvider } from "@mui/material"
import { DashboardPage } from "../features/dashboard/";
import AppHeader from "./AppHeader";
import EnvironmentBadge from "./EnvironmentBadge";
import { professionalTheme } from "./theme";


export default function AppShell() {

    return (
        <ThemeProvider theme={professionalTheme}>
            <CssBaseline />
            <Container maxWidth="md" sx={{ py: 3 }}>
                <AppHeader />
                {import.meta.env.DEV && <EnvironmentBadge />}
                <DashboardPage />
            </Container>
        </ThemeProvider>
    )
}