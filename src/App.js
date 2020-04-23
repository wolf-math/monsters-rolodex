import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  constructor() {
    super();

    this.state = [
      {
        name: 'Boogeyman'
      },
      {
        name: 'Ghost'
      },
      {
        name: 'Ice Cream Man'
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}! 
            {8-7}
          </p>
          <button onClick={() => this.setState({string : "Hey Yall, I'm Marry Poppins"})}>Change Text</button>
        </header>
      </div>
    )
  }
}

export default App;
