import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Women from "./Women";
import Children from "./Children";
import Sale from "./Sale";
import Men from "./Men";
import Shoes from "./Shoes";

const Homepage = () => {
  return (
    <Grid columns="three" className="container">
      <Grid.Column width={8}>
        <Segment>
          <Women />
        </Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>
          <Men />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Children />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Shoes />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Sale />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Homepage;
