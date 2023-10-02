import './index.css'

import {Component} from 'react'

class App extends Component {
  state = {randomNumber: 0}

  generate = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container1">
        <div className="container2">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="buttonDiv" onClick={this.generate}>
            Generate
          </button>

          <div>
            <p>{randomNumber}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
