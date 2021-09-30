import { Typography } from "@mui/material";
import React from "react";
import Link from "../../src/Link";

const Footer = () => {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Built with React.js, Next.js, and MUI by "}
        <Link color="inherit" href="https://www.aaronnguyen.dev/">
          Aaron T. Nguyen
        </Link>
        {" in "}
        {new Date().getFullYear()}.
      </Typography>
    </>
  );
};

export default Footer;
