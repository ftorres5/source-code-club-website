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
import DiscordIcon from "../icons/DiscordIcon";
import { Code as CodeIcon } from "@mui/icons-material";
import Navlink from "./Navlink";
import navlinksData from "../data/navlinks-data";
import Link from "../../src/Link";

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
              SCC @ VW
            </Typography>

            {/* Links */}

            {navlinksData.map((navlink) => (
              <Navlink
                key={navlink.id}
                name={navlink.name}
                href={navlink.href}
              />
            ))}

            <IconButton
              aria-label="discord"
              href="https://discord.gg/3nQ69WHTT8"
              component={Link}
            >
              <DiscordIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
