import * as React from "react";
import { Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Copyright from "../src/Copyright";
import Navbar from "../components/navbar/Navbar";
import EventList from "../components/event-list/EventList";
import About from "../components/about/About";
import Team from "../components/team/Team";
import ProjectList from "../components/project-list/ProjectList";

export default function Index() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <About />
            </Grid>
            <Grid item md={4}>
              <EventList />
            </Grid>
            <Grid item>
              <Team />
            </Grid>
            <Grid item>
              <ProjectList />
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
