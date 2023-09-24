import { Component } from "react";

// stateful components
class App extends Component {
  constructor(props) {
    super(props); // to call the parent class constructor

    // define the state
    this.state = {
      count: 0,
    }
  }

  handlePlusClick = () => {
    // update the state (data) of the count
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  handleMinusClick = () => {
    if (this.state.count > 0) {
      // update the state (data) of the count
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }))
    }
  }

  handleZeroClick = () => {
    // update the state (data) of the count
    this.setState((prevState) => ({
      count: 0,
    }))
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handlePlusClick}>plus</button>
        <button onClick={this.handleMinusClick}>minus</button>
        <button onClick={this.handleZeroClick}>zero</button>
      </div>
    )
  }
}

export default App;