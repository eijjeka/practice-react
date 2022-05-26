import React from "react";

export class Timer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
    reset: false,
  };

  componentDidMount() {
    this.setState({ count: Number(localStorage.getItem("isCounting")) });
  }

  componentDidUpdate() {
    localStorage.setItem("isCounting", this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleSomething = () => {
    console.log("items");
  };

  handleStop = () => {
    this.setState({
      isCounting: !this.state.isCounting,
    });
    clearInterval(this.timerId);
  };

  handleStart = () => {
    this.setState({
      isCounting: !this.state.isCounting,
    });
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  };

  handleReset = () => {
    this.setState({ count: 0 });
    clearInterval(this.timerId);
  };

  render() {
    const { count, isCounting, reset } = this.state;
    return (
      <div style={TimerStyle} className="Timer">
        <div style={ContainerStyle}>
          <h1>React Timer</h1>
          <h3>{count}</h3>
          {!isCounting ? (
            <button onClick={this.handleStart}>Start</button>
          ) : (
            <button onClick={this.handleStop}>Stop</button>
          )}
          <button
            disabled={isCounting ? "disabled" : ""}
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const TimerStyle = {
  display: "flex",
  borderBottom: "1px solid black",
};

const ContainerStyle = {
  padding: "10px",
  textAlign: "center",
  margin: "0 auto",
};
