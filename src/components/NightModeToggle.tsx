import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeContext } from "../theme/ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderColor: "text.primary",
        border: "none",
       
      
      }}
    >
      <IconButton  onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
