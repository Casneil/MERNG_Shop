import React from "react";
import { data } from "../utils/_Data";

const Women = () => {
  console.log(data);

  return (
    <div>
      <header>Women</header>
      {data.map((goods, index) => (
        <div key={index}>
          <img
            style={{ width: 200, height: 140 }}
            src={goods.women.image}
            alt="women"
          />
        </div>
      ))}
    </div>
  );
};

export default Women;
