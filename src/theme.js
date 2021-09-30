import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Rubik"].join(", "),
  },
  palette: {
    primary: {
      main: "#BE1531",
    },
    secondary: {
      main: "#FFB115",
    },
    error: {
      main: "#D32F2F",
    },
  },
});

export default theme;
