import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

import { data } from "../utils/_Data";

const Children = () => {
  return (
    <div>
      {data.map((goods, index) => (
        <Card key={index} as={Link} to="/department/children">
          <Card.Content>
            <Card.Header>Children</Card.Header>
          </Card.Content>
          <Image src={goods.children.image} />
        </Card>
      ))}
    </div>
  );
};

export default Children;
