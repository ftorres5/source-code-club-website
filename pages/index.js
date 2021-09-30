import * as React from "react";
import { Grid } from "@mui/material";
import EventList from "../components/event-list/EventList";
import About from "../components/about/About";
import Team from "../components/team/Team";
import ProjectList from "../components/project-list/ProjectList";
import Layout from "../components/layout/Layout";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <About />
        </Grid>
        <Grid item md={4}>
          <EventList />
        </Grid>
        <Grid item xs={12}>
          <Team />
        </Grid>
        <Grid item xs={12}>
          <ProjectList />
        </Grid>
      </Grid>
    </Layout>
  );
}
