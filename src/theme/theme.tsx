import { PaletteMode } from "@mui/material";

const theme = {
  palette: {
    primary: "#63a4ff",
  },
};

export const getModeTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#1976d2", // Blue
            light: "#63a4ff",
            dark: "#004ba0",
            contrastText: "#fff",
          },
          secondary: {
            main: "#dc004e", // Pinkish red
            light: "#ff5983",
            dark: "#9a0036",
            contrastText: "#fff",
          },
          background: {
            default: "#f5f5f5", // Light gray
            paper: "#ffffff", // White
          },
          text: {
            primary: "#212121", // Dark gray
            secondary: "#757575", // Medium gray
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#90caf9", // Light blue
            light: "#e3f2fd",
            dark: "#42a5f5",
            contrastText: "#000",
          },
          secondary: {
            main: "#f48fb1", // Light pink
            light: "#f8bbd0",
            dark: "#c2185b",
            contrastText: "#000",
          },
          background: {
            default: "#121212", // Darkest gray
            paper: "#1e1e1e", // Slightly lighter dark gray
          },
          text: {
            primary: "#ffffff", // White
            secondary: "#b0bec5", // Light gray
          },
        }),
  },
});

export default theme;
