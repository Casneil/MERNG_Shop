import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

import { data } from "../utils/_Data";
console.log(data);

const Mens = () => {
  return (
    <div>
      {data.map((goods, index) => (
        <Card key={index}>
          <Card.Content>
            <Card.Header>Men</Card.Header>
          </Card.Content>
          <Image src={goods.men.image} />
        </Card>
      ))}
    </div>
  );
};

export default Mens;
