import { createTheme } from "@mui/material/styles";

const OUTLINE = "3px solid #111111";

export const simpsonsTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#FFE135", paper: "#FFFACD" },
    primary: { main: "#1E88E5", contrastText: "#FFFFFF" },
    secondary: { main: "#E53935", contrastText: "#FFFFFF" },
    warning: { main: "#FFB300" },
    success: { main: "#43A047" },
    error: { main: "#D32F2F" },
    text: { primary: "#1A1A1A", secondary: "#333333" },
  },
  typography: {
    fontFamily: `"Comic Neue", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    h1: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, letterSpacing: 0.5, color: "#1A1A1A" },
    h2: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, letterSpacing: 0.5, color: "#1A1A1A" },
    h3: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, letterSpacing: 0.4, color: "#1A1A1A" },
    h4: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, letterSpacing: 0.3, color: "#1A1A1A" },
    h5: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, letterSpacing: 0.2, color: "#1A1A1A" },
    h6: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, letterSpacing: 0.2, color: "#1A1A1A" },
    subtitle1: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, color: "#1A1A1A" },
    subtitle2: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, fontWeight: 700, color: "#1A1A1A" },
    button: { fontFamily: `"Luckiest Guy", "Comic Neue", sans-serif`, textTransform: "none" },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #FFE135 0%, #FFD54F 50%, #FFC107 100%)",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: OUTLINE,
          boxShadow: "8px 8px 0 #1A1A1A",
          backgroundColor: "#FFFDE7",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: OUTLINE,
          boxShadow: "4px 4px 0 #111111",
          borderRadius: 999,
          paddingLeft: 18,
          paddingRight: 18,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 999,
            "& fieldset": { border: OUTLINE },
          },
        },
      },
    },
    MuiDivider: { styleOverrides: { root: { borderColor: "#111111", borderBottomWidth: 2 } } },
  },
});

export const professionalTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F6F7FB",
      paper: "#FFFFFF",
    },
    primary: { main: "#1E5EFF" },
    secondary: { main: "#6B7280" },
    success: { main: "#16A34A" },
    warning: { main: "#F59E0B" },
    error: { main: "#DC2626" },
    text: { primary: "#111827", secondary: "#4B5563" },
  },
  typography: {
    fontFamily: `system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 10px 30px rgba(17,24,39,0.08)",
          border: "1px solid rgba(17,24,39,0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "none",
        },
      },
    },
  },
});
