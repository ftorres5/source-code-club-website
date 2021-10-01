import React from "react";
import { Box } from "@mui/system";
import { Group as GroupIcon } from "@mui/icons-material";
import IconTypography from "../components/shared/IconTypography";

const Team = () => {
  return (
    <Box>
      <IconTypography icon={<GroupIcon />}>Meet Our Team</IconTypography>
    </Box>
  );
};
console.log();
export default Team;
