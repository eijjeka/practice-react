import React, { Component } from "react";

export class FormWithRef extends Component {
  constructor() {
    super();
    this.firstNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    this.firstNameRef.current.focus();
  }

  handleChange = (e) => {
    this.setState(
      () => ({ [e.target.name]: e.target.value }),
      () => {
        if (this.state.card.length === 16) {
          this.emailRef.current.focus();
        }
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.card.length < 16) {
      alert("Invalid card number");
      return;
    }

    this.firstNameRef.value = "";
    this.emailRef.value = "";
  };

  render() {
    return (
      <div style={FormStyle}>
        <form style={ContainerStyle} onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="card"
            placeholder="First card"
            onChange={this.handleChange}
            ref={this.firstNameRef}
          />
          <input
            type="email"
            name="email"
            placeholder="First email"
            onChange={this.handleChange}
            ref={this.emailRef}
          />
        </form>
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
