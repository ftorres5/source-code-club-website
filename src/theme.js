import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Rubik"].join(", "),
  },
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#FFC107",
    },
    error: {
      main: "#B00020",
    },
    background: {
      default: "#00000",
    },
  },
});

export default theme;
