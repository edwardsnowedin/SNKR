import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class App extends Component {

  render() {
    const snkr = 'SNKR'
    return(
      <div>
        <div className="logo">
          <h1>{snkr}</h1>
        </div>
      </div>
    );
  }
}
