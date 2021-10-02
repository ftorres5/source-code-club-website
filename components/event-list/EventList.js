import { Event as EventIcon } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Event from "./Event";

import eventsData from "../data/events-data";
import IconTypography from "../shared/IconTypography";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const { data } = eventsData;
    setEvents(data);
  }, []);
  return (
    <Box>
      {/* Title */}
      <IconTypography icon={<EventIcon />}>Events</IconTypography>

      {/* Events */}
      <Stack spacing={1.5}>
        {events.map((event) => (
          <Event key={event.id} data={event} />
        ))}
      </Stack>
    </Box>
  );
};

export default EventList;
