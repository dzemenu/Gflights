import { PaletteMode } from "@mui/material";

export const getModeTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1a73e8", 
            },
            background: {
              default: "#ffffff",
              paper: "#f8f9fa",
            },
            text: {
              primary: "#202124",
              secondary: "#5f6368",
            },
          }
        : {
          }),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#ffffff" : undefined, 
            color: mode === "light" ? "#202124" : "#fff",
            boxShadow: "none",
            borderBottom: mode === "light" ? "1px solid #e0e0e0" : "none",
          },
        },
      },
    },
  });
  