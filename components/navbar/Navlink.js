import React from "react";
import Link from "../../src/Link";
import { Button } from "@mui/material";

const Navlink = ({ name, href }) => {
  return (
    <div>
      <Button
        variant="text"
        color="inherit"
        href={href}
        component={Link}
        noLinkStyle
      >
        {name}
      </Button>
    </div>
  );
};

export default Navlink;
