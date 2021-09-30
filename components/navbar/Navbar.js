import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Button,
  Toolbar,
  IconButton,
  Container,
} from "@mui/material";
import Link from "../../src/Link";
import DiscordIcon from "../icons/DiscordIcon";
import { Code as CodeIcon } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters={true}>
            {/* Navbar Title */}
            {/* disableGutters: Remove x-axis margin*/}
            <CodeIcon fontSize="medium" sx={{ mr: 0.5 }} />
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              flexGrow={1}
              sx={{ textTransform: "uppercase" }}
            >
              SSC @ VW
            </Typography>

            {/* Links */}
            <Button
              variant="text"
              color="inherit"
              href="/"
              component={Link}
              noLinkStyle
            ></Button>
            <IconButton aria-label="discord">
              <DiscordIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
