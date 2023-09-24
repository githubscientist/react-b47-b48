import { Component } from "react";

class Hello extends Component{
  render() {
    return <div>Hello Guest!</div>
  }
}

class App extends Component{
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App;