import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "../../src/Link";

const Project = ({ data }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        borderTop: 4,
        borderColor: data.id % 2 ? "primary.main" : "secondary.main",
        boxShadow: 2,
        maxWidth: 250,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1, pb: 0.5 }}>
        <Typography variant="h6" fontWeight={400} component="div">
          {data.name}
        </Typography>
        <Chip label={data.category} color="primary" size="small" />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" color="inherit" href={data.url} component={Link}>
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
