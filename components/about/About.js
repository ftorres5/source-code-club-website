import React from "react";
import { Box, Typography } from "@mui/material";
import { DeveloperMode as DeveloperModeIcon } from "@mui/icons-material";

const About = () => {
  return (
    <Box>
      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
        <DeveloperModeIcon sx={{ fontSize: "2.4rem", mr: 1 }} />
        <Typography
          variant="h3"
          color="primary"
          sx={{ textTransform: "uppercase" }}
        >
          SOURCE CODE
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
