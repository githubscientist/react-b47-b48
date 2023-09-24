import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  }

  handleGoodClick = () => {
    this.setState({
      ...this.state,
      good: this.state.good + 1,
    })
  }

  handleNeutralClick = () => {
    this.setState({
      ...this.state,
      neutral: this.state.neutral + 1,
    })
  }

  handleBadClick = () => {
    this.setState({
      ...this.state,
      bad: this.state.bad + 1,
    })
  }

  handleReset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  render() {
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={this.handleGoodClick}>good</button>
        <button onClick={this.handleNeutralClick}>neutral</button>
        <button onClick={this.handleBadClick}>bad</button>

        <h2>statistics</h2>
        <p>good { this.state.good }</p>
        <p>neutral { this.state.neutral }</p>
        <p>bad {this.state.bad}</p>
        
        <button onClick={this.handleReset}>Reset Feedbacks</button>
      </div>
    )
  }
}