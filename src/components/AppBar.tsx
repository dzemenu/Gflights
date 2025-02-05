import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../theme/ThemeContextProvider";
import FlightIcon from "@mui/icons-material/Flight";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import ExploreIcon from "@mui/icons-material/Explore";

export default function CustomAppBar() {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#202124",
        color: theme.palette.mode === "light" ? "#202124" : "#fff",
        boxShadow: "none",
        borderBottom:
          theme.palette.mode === "light" ? "1px solid #e0e0e0" : "none",
        paddingX: 2,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            sx={{
              color: theme.palette.mode === "light" ? "#202124" : "#fff",
              borderRadius: "30px",
              borderColor: "rgba(255, 255, 255, 0.3)",
              textTransform: "none",
            }}
          >
            Travel
          </Button>
          <Button
            variant="outlined"
            startIcon={<ExploreIcon />}
            sx={{
              color: theme.palette.mode === "light" ? "#202124" : "#fff",
              borderRadius: "30px",
              borderColor: "rgba(255, 255, 255, 0.3)",
              textTransform: "none",
            }}
          >
            Explore
          </Button>
          <Button
            variant="outlined"
            startIcon={<FlightIcon />}
            sx={{
              color: theme.palette.mode === "light" ? "#202124" : "#fff",
              borderRadius: "30px",
              borderColor: "rgba(255, 255, 255, 0.3)",
              textTransform: "none",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "transparent",
            }}
          >
            Flights
          </Button>
          <Button
            variant="outlined"
            startIcon={<HotelIcon />}
            sx={{
              color: theme.palette.mode === "light" ? "#202124" : "#fff",
              borderRadius: "30px",
              borderColor: "rgba(255, 255, 255, 0.3)",
              textTransform: "none",
            }}
          >
            Hotels
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
