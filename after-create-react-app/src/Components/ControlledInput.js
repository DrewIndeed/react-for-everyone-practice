import React from "react";

class ControlledInput extends React.Component {
  state = {
    username: "",
  };

  handleChange = (e) => {
    // way 1: if this case, there is only one value
    // const value = e.target.value;
    // this.setState({ username: value });

    // way 2: when we have multiple name - value pairs from inputs, use this
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="inputContainer">
        <h1>{this.state.username}</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ControlledInput;
