import React, {Component} from 'react';
import Result from './Result';
import KeyPad from './KeyPad';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state= {
      result: ""
    }
  }

  onClick = button => {
    
    if(button === "=") {
      this.calculate()
    } else if (button === "C") {
      this.reset()
    } else if (button === "CE") {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: "I have discalculia *Link*"
      })
    }

    catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState ({
      result: ""
    })

  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Subtraction Calculator
          </p>
        </header>
        <div className="calculator">
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
          </div>
      </div>
    );
  }
}

export default App;
