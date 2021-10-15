import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Event = ({ data }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsCollapse(true)}
      onMouseOut={() => setIsCollapse(false)}
      sx={{
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={400}
          component="div"
          noWrap
          gutterBottom
        >
          {data.name}
        </Typography>

        <Typography variant="subtitle2" fontWeight={400}>
          <Chip label={data.instructor} size="small" color="secondary" />
          &emsp;
          {data.time}
          &emsp;
          {data.date}
        </Typography>

        <Collapse orientation="vertical" in={isCollapse}>
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, mb: 1 }}
            >
              Location: {data.location}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {data.description}
          </Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Event;
