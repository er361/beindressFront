// require("./node_modules/bootstrap/dist/css/bootstrap.min.css")

import ReactDOM from 'react-dom';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import Routes from './routes/Route.jsx';

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} />
  ,
  document.getElementById('myApp'));
