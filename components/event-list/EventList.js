import { Event as EventIcon } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Event from "./Event";

import eventsData from "../mockups/events-data";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const { data } = eventsData;
    setEvents(data);
  }, []);
  return (
    <Box height="20rem">
      {/* Title */}
      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
        <EventIcon sx={{ mr: 0.5 }} />
        <Typography variant="h5">Events</Typography>
      </Box>

      {/* Events */}
      <Stack spacing={1}>
        {events.map((event) => (
          <Event key={event.id} data={event} />
        ))}
      </Stack>
    </Box>
  );
};

export default EventList;
