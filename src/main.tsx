import React from 'react'
import ReactDom from 'react-dom/client'
import App from './app/AppShell.tsx'
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

async function enableMocking() {
    if (import.meta.env.VITE_API_MODE !== "mock") return;
    const { worker } = await import("./mocks/browser");
    await worker.start({ onUnhandledRequest: "bypass" });
}

enableMocking().then(() => {
    ReactDom.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
});
