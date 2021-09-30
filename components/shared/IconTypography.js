import React from "react";
import { Box, Typography } from "@mui/material";

const IconTypography = ({ icon, children }) => {
  return (
    <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
      {icon}
      <Typography variant="h5" sx={{ ml: 1 }}>
        {children}
      </Typography>
    </Box>
  );
};

export default IconTypography;
