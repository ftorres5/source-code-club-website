import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Built with React.js, MUI, and Next.js by "}
      <MuiLink color="inherit" href="https://www.aaronnguyen.dev">
        Aaron Thang Nguyen
      </MuiLink>
      {" in "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
