import React from "react";
import { data } from "../utils/_Data";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { Card, Icon, Image } from "semantic-ui-react";

const Women = () => {
  const dispatch = useDispatch();
  const women = useSelector(state => state.getData[0].women);

  return (
    <div>
      {data.map((goods, index) => (
        <Card key={index}>
          <Card.Content>
            <Card.Header>Women</Card.Header>
          </Card.Content>
          <Image src={goods.women.image} />
        </Card>
      ))}
    </div>
  );
};

export default Women;
