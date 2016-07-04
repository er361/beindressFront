import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App/App.jsx';
import Admin from '../components/Admin/Admin.jsx';
import Content from '../components/Content/Content.jsx';
import Login from '../components/Login/Login.jsx';
import auth from '../components/Login/auth.js';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Content} />
    <Route path='login' component={Login}/>
    <Route path='admin' component={Admin} onEnter={requireAuth}/>
  </Route>
)
