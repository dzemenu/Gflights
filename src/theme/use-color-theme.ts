import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import  { getModeTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));



  const modifiedTheme = React.useMemo(
    () => createTheme(getModeTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
