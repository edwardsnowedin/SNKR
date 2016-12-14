import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router';

export default class Landing extends Component {
  render(){
    const snkr = 'SNKR';
    return(
      <div>
        <div>
          <h1>{snkr}</h1>
        </div>
      </div>
    )
  }
}
