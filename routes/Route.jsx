import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App/App.jsx';

import Content from '../components/Content/Content.jsx';
import Login from '../components/Login/Login.jsx';
//admin components
import Admin from '../components/Admin/Admin.jsx';
import Links from '../components/Admin/Links/Links.jsx';
import BlockSkidki from '../components/Admin/BlockSkidki/BlockSkidki.jsx';
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
    <Route path='admin' component={Admin} onEnter={requireAuth}>

    </Route>
    <Route component={Admin}>
      <Route path='TopBlock' component={BlockSkidki} />
      <Route path='Links' component={Links} />
    </Route>
  </Route>
)
