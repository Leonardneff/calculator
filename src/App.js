import React, {Component} from 'react';
import Result from './Result';
import KeyPad from './KeyPad';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state= {
      result: "",
      text: false
    }
  }

  onClick = button => {
    
    if(button === "=") {
      this.calculate()
    } else if (button === "C") {
      this.reset()
      this.setState({text:false})
    } else if (button === "CE") {
      this.backspace()
      this.setState({text:false})
    } else if (this.state.text) {
      this.reset()
      this.setState({text:false})
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: <div className="dycalculia"><span>Sorry, I have</span> <a href="https://en.wikipedia.org/wiki/Dyscalculia" target="_blank" rel="noopener noreferrer">dyscalculia</a></div>,
        text: true
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
            Calculating Difference
          </h3>
          <p>Use the numeric keypad to perform a calculation.</p>
        </header>
        <div className="calculator">
          <Result result={this.state.result} text={this.state.text} />
          <KeyPad onClick={this.onClick} />
          </div>
      </div>
    );
  }
}

export default App;
