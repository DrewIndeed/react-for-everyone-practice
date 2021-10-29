import React from "react";

const SayMyNameBtn = () => {
  const sayName = () => {
    setTimeout(() => {
      alert("My name is Andrew Le Nguyen! *DAB*");
    }, 1000);
  };

  return (
    <div className="sayMyNameBtn">
      <button className="contentBtn" onClick={sayName}>
        Say My Name
      </button>
    </div>
  );
};

export default SayMyNameBtn;
