import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Home from "./components/Home";
import { useThemeContext } from "./theme/ThemeContextProvider";
import AppBar from "./components/AppBar";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <AppBar />
      <Box sx={{ mt: 8, overflowY: "auto", height: "calc(100vh - 64px)" }}>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
