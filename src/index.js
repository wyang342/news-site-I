import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './Routes';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
