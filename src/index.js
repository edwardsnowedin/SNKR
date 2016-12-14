import React from 'react';
import ReactDOM from 'react-dom';
import routes from './Components/routes.js';
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />, 
  document.querySelector('#root-container'));
