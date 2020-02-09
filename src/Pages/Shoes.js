import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

import { data } from "../utils/_Data";

const Shoes = () => {
  return (
    <div>
      {data.map((goods, index) => (
        <Card key={index}>
          <Card.Content>
            <Card.Header>Shoes</Card.Header>
          </Card.Content>
          <Image src={goods.sneaker.image} />
        </Card>
      ))}
    </div>
  );
};

export default Shoes;
