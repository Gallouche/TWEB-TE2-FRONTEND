import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FartScroll from 'react-fartscroll'
import fetch from 'node-fetch'

require('dotenv').config()

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : ''
    }
  }

  componentDidMount () {
    fetch(process.env.REACT_APP_BACKEND_URL + 'users').then(res => res.json()
      .then(data => {
        this.setState({name : `${data.firstName} ${data.lastName}`});
      })
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Here is the nice user name from backend : {this.state.name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
