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

  increment = () => {
    // update the state (data) of the count
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App;