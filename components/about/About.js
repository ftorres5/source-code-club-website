import React from "react";
import { Box, Typography } from "@mui/material";
import { DeveloperMode as DeveloperModeIcon } from "@mui/icons-material";
import IconTypography from "../shared/IconTypography";

const About = () => {
  return (
    <Box>
      <IconTypography icon={<DeveloperModeIcon />}>
        Source Code Club
      </IconTypography>
    </Box>
  );
};

export default About;
