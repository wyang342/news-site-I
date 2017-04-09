import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import HomeContainer from './containers/Home/HomeContainer';

const News = require('../data/news.json');

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" render={(props)  => <HomeContainer news={News} {...props} /> } />
  </BrowserRouter>,
  document.getElementById('root')
);
