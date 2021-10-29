import React, { useState } from "react";
import Button from "./Button";
import MainForthSection from "./MainForthSection";
import ControlledInput from "./ControlledInput";

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
      <Button text={"Say My Name"} ev={sayName} />
      <br />
      <br />
      <hr />
      <h2>4. Incre and Decre States</h2>
      <MainForthSection
        icev={handleIncrement}
        dcev={handleDecrement}
        curNum={num}
      />
      <br />
      <br />
      <hr />
      <h2>5. Controlled Input</h2>
      <ControlledInput />
    </main>
  );
};

export default Main;
