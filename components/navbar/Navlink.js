import React from "react";
import Link from "../../src/Link";
import { Button } from "@mui/material";

const Navlink = ({ name, href }) => {
  return (
    <Button variant="text" color="inherit" href={href} component={Link}>
      {name}
    </Button>
  );
};

export default Navlink;
