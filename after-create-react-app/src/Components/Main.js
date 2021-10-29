import React, { useState } from "react";
import SayMyNameBtn from "./Button";

const Main = ({ techList, op1, op2 }) => {
  const [num, setNum] = useState(0);

  const sayName = () => {
    setTimeout(() => {
      alert("My name is Andrew Le Nguyen! *DAB*");
    }, 1000);
  };

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    setNum(num - 1);
  };

  return (
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
      <br />
      <br />
      <hr />
      <h2>3. Playing with events</h2>
      <SayMyNameBtn text={"Say My Name"} ev={sayName} />
      <br />
      <br />
      <hr />
      <h2>4. Incre and Decre States</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <SayMyNameBtn text={"Increase"} ev={handleIncrement} />
        <div
          style={{
            fontSize: "5rem",
            margin: "0 2rem",
            border: "2px solid black",
            padding: "0 4rem",
          }}
        >
          {num}
        </div>
        <SayMyNameBtn text={"Decrease"} ev={handleDecrement} />
      </div>
    </main>
  );
};

export default Main;
