"use client";

import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import AppHeader from "@/src/app/AppHeader";
import EnvironmentBadge from "@/src/app/EnvironmentBadge";
import { professionalDarkTheme } from "@/src/app/theme";

export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={professionalDarkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 3 }}>
        <AppHeader />
        {process.env.NODE_ENV === "development" && <EnvironmentBadge />}
        {children}
      </Container>
    </ThemeProvider>
  );
}
