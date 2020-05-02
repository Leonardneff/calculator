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
        result: <div className="dycalculia"><p>Sorry, I have</p> <a href="https://en.wikipedia.org/wiki/Dyscalculia" target="_blank" rel="noopener noreferrer" >dyscalculia</a></div> 
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
          <h3>
            Subtraction Calculator
          </h3>
          <p>Use the num pad to perform a calculation.</p>
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
