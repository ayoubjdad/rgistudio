// src/theme/overrides.js
import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#25d366",
    },
    secondary: {
      main: "#25d366",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#222",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          padding: "8px 16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "8px 0",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#25d366",
        },
      },
    },
    // You can add more component overrides here
  },
});
