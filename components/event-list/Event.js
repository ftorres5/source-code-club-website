import { Card, CardContent, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";

const Event = ({ id, data }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsCollapse(true)}
      onMouseOut={() => setIsCollapse(false)}
      sx={{ borderRadius: 2, boxShadow: 2 }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>

        <Typography gutterBottom>
          {data.time}&emsp;
          {data.date}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {data.instructor}&emsp;
          {data.location}
        </Typography>

        <Collapse orientation="vertical" in={isCollapse}>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Event;
