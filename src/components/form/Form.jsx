import { Component } from "react";

export class Form extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    select: "",
    subscription: false,
    gender: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  validateName = () => {
    if (this.state.firstName.length < 7) {
      console.log("Your first name can't be less than 7 letters");
    }
  };

  render() {
    const { firstName, email, message, select, subscription, gender } =
      this.state;
    return (
      <div style={FormStyle}>
        <div style={ContainerStyle}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={this.handleChange}
            onBlur={this.validateName}
          />
          <input
            type="email"
            name="email"
            placeholder="First email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            name="message"
            value={message}
            id=""
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
          <br />
          <select
            name="select"
            onChange={this.handleChange}
            value={select}
            id=""
          >
            <option disabled></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="subscription"
              checked={subscription}
              onChange={this.handleCheckboxChange}
            />
            Subscription
          </label>
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          Female
        </div>
      </div>
    );
  }
}

const FormStyle = {
  display: "flex",
  borderBottom: "1px solid black",
};

const ContainerStyle = {
  padding: "10px",
  textAlign: "center",
  margin: "0 auto",
};
