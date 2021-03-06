import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <button type={props.type} className="contentBtn" onClick={props.ev}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
