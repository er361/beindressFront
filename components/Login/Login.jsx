import React from 'react';
import './Login.scss';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

 export default class Login extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  }
  getChildContext() {
   return {muiTheme: getMuiTheme(baseTheme)};
 }
  render() {
    const style = {
            height: 200,
            width: 320,
            margin: 20,
            marginTop: 100,
            paddingTop: 15,
            textAlign: 'center',
            display: 'inline-block',
          };
          var form =
          <div className='form'>
            <TextField  hintText="Name"/>
            <TextField  hintText="Email" />
            <RaisedButton
              className='button'
              label='Log in'
              primary={true}
              fullWidth={true} />
          </div>
    return (
      <div className="wrapper">
        <div className="flex">
          <Paper  style={style} children={form}/>
        </div>
      </div>
    );
  }
}
