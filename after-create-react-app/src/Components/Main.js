import React from "react";

const Main = ({ techList, op1, op2 }) => (
  <main className="wrapper main">
    <hr />
    <h2>
      1. Prequisites to get started with{" "}
      <strong>
        <em>ReactJS</em>
      </strong>
    </h2>
    <ul>{techList}</ul>
    <hr />
    <h2>
      2. Random basic Math using numbers: {op1} + {op2} = {op1 + op2}
    </h2>
  </main>
);

export default Main;
