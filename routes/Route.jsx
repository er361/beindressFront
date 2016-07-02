import React from 'react';
import {Route} from 'react-router';
import App from '../components/App/App.jsx';
import BlockSkidki from '../components/BlockSkidki/BlockSkidki.jsx';

var authCheck = (nextState, transition) => {
  console.log(nextState);
  console.log(transition);
}
export default (
  <Route path='/' component={App} onEnter={authCheck}>
    <Route path='login' component={BlockSkidki}/>
  </Route>
)
