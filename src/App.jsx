import { Component } from "react";

class App extends Component {

  // componentDidMount: called after the component has been rendered to the DOM
  componentDidMount() {
    console.log('component mounted');
  }

  // called immediately after the component updated in the DOM
  // called on state or prop changes
  componentDidUpdate() {
    console.log('component state updated');
  }

  componentWillUnmount() {
    // invoked just before the component is removed from the DOM
    // releasing memory or resources
    // detaching the events
    // cancelling timers
  }

  render() {
    return <div>Hello!</div>
  }
}

export default App;