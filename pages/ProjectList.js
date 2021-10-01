import React from "react";
import { Box } from "@mui/system";
import { FolderOpen as FolderOpenIcon } from "@mui/icons-material";
import IconTypography from "../components/shared/IconTypography";

const ProjectList = () => {
  return (
    <Box>
      <IconTypography icon={<FolderOpenIcon />}>Projects</IconTypography>
    </Box>
  );
};

export default ProjectList;
