import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App/App.jsx';
import Admin from '../components/Admin/Admin.jsx';
import Content from '../components/Content/Content.jsx';
import Login from '../components/Login/Login.jsx';

var authCheck = (nextState, transition) => {
  // console.log(nextState);
  // console.log(transition);
}
export default (
  <Route path='/' component={App} onEnter={authCheck}>
    <IndexRoute component={Content} />
    <Route path='admin' component={Login}/>
  </Route>
)
