import React from "react";

export default class Hw extends React.Component {
  state = {
    email: "",
    isAgreeWithTerms: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxClick = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  onClickSubmit = () => {
    const { email, isAgreeWithTerms } = this.state;
    const isValidEmail =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(
        email.toLowerCase()
      );
    if (!isValidEmail) {
      alert("Please enter correct email");
      return;
    }
    if (!isAgreeWithTerms) {
      alert("Please checked all agreements");
      return;
    }
    return alert("You are subscribe of our website!");
  };

  render() {
    const { email, isAgreeWithTerms } = this.state;

    return (
      <div style={FormStyle}>
        <div style={ContainerStyle}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="checkbox"
              name="isAgreeWithTerms"
              checked={isAgreeWithTerms}
              onChange={this.handleCheckboxClick}
            />
            I agree with terms and conditions
          </label>
          <br />
          <button onClick={this.onClickSubmit}>Send</button>
        </div>
      </div>
    );
  }
}

const FormStyle = {
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid black",
};

const ContainerStyle = {
  padding: "10px",
  textAlign: "center",
  margin: "0 auto",
};
