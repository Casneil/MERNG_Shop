import React from "react";
import { data } from "../utils/_Data";

const Women = () => {
  return (
    <div>
      <header>Women</header>
      <div>{data.map(goods => console.log(goods))}</div>
    </div>
  );
};

export default Women;
