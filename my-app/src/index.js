import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function test() {
  return 111;
}
ReactDOM.render(
  <div>jsx {test()}</div>,
  document.getElementById('root')
);

