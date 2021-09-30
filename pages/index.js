import * as React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Copyright from "../src/Copyright";
import Navbar from "../components/navbar/Navbar";
import EventList from "../components/event-list/EventList";
import About from "../components/about/About";
import Team from "../components/team/Team";
import ProjectList from "../components/project-list/ProjectList";

export default function Index() {
  return (
    /*  <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5 example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    
*/
    <>
      <Navbar />
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <About />
          </Grid>
          <Grid item xs={4}>
            <EventList />
          </Grid>
          <Grid item xs={12}>
            <Team />
          </Grid>
          <Grid item xs={12}>
            <ProjectList />
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
