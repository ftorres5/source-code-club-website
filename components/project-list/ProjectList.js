import { FolderOpen as FolderOpenIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import projectsData from "../data/projects-data";
import IconTypography from "../shared/IconTypography";
import Project from "./Project";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = projectsData;
    setProjects(data);
  }, []);
  return (
    <Box>
      <IconTypography icon={<FolderOpenIcon />}>Projects</IconTypography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        justifyContent="flex-start"
      >
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectList;
