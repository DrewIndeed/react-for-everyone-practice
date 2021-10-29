import React from "react";
import Button from "./Button";

class MainClass extends React.Component {
  state = {
    count: 0,
  };

  sayName = () => {
    setTimeout(() => {
      alert("My name is Andrew Le Nguyen! *DAB*");
    }, 1000);
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <main className="wrapper main">
        <hr />
        <h2>
          1. Prequisites to get started with{" "}
          <strong>
            <em>ReactJS</em>
          </strong>
        </h2>
        <ul>{this.props.techList}</ul>
        <hr />
        <h2>
          2. Random basic Math using numbers: {this.props.op1} +{" "}
          {this.props.op2} = {this.props.op1 + this.props.op2}
        </h2>
        <br />
        <br />
        <hr />
        <h2>3. Playing with events</h2>
        <Button text={"Say My Name"} ev={this.sayName} />
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
          <Button text={"Increase"} ev={this.handleIncrement} />
          <div
            style={{
              fontSize: "5rem",
              margin: "0 2rem",
              border: "2px solid black",
              padding: "0 4rem",
            }}
          >
            {this.state.count}
          </div>
          <Button text={"Decrease"} ev={this.handleDecrement} />
        </div>
      </main>
    );
  }
}

export default MainClass;
