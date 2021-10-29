import React from "react";
import Button from "./Button";

class HorizontalForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    school: "",
    sport: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { firstName, lastName, school, sport } = this.state;
    e.preventDefault();
    setTimeout(() => {
      alert(
        `Hello ${firstName} ${lastName} from ${school}! I like ${sport} too!`
			);
			setTimeout(() => {
				window.location = "/";
			}, 1000);
		}, 1000);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="horizontalForm">
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          placeholder="Enter first name"
          type="text"
          name="firstName"
          id="firstName"
        />
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          placeholder="Enter last name"
          type="text"
          name="lastName"
          id="lastName"
        />
        <input
          onChange={this.handleChange}
          value={this.state.school}
          placeholder="Enter school"
          type="text"
          name="school"
          id="school"
        />
        <input
          onChange={this.handleChange}
          value={this.state.sport}
          placeholder="Enter sport"
          type="text"
          name="sport"
          id="sport"
        />
        <Button type={"submit"} text={"Submit Info"} />
      </form>
    );
  }
}

export default HorizontalForm;
