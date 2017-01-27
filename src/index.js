import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App source="http://codepen.io/jobs.json" />, document.querySelector("#root"));