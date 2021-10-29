import React from "react";
import Button from "./Button";

const MainForthSection = ({ icev, dcev, curNum }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Button text={"Increase"} ev={icev} />
      <div
        style={{
          fontSize: "5rem",
          margin: "0 2rem",
          border: "2px solid black",
          padding: "0 4rem",
        }}
      >
        {curNum}
      </div>
      <Button text={"Decrease"} ev={dcev} />
    </div>
  );
};

export default MainForthSection;
