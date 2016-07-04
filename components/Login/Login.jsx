import React from 'react';
import './Login.scss';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {withRouter} from 'react-router';
import auth from './auth.js';

 class Login extends React.Component {
    state = {
      error: false,
      open: false
    }
    
    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    handleSubmit = (event) => {

      event.preventDefault();

      let email = this.refs.email.getValue();
      let password = this.refs.password.getValue();

      auth.login(email,password, (loggedIn) => {
        if(!loggedIn)
          return this.handleOpen();

        const { props: { location } } = this

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/admin')
        }
        // console.log(location);
      })
    }
    render() {
      console.log(auth.loggedIn());
      // console.log(getMuiTheme(baseTheme));
      const { palette } = getMuiTheme(baseTheme);
      const style = {
              page: {
                height: 250,
                width: 320,
                margin: 20,
                marginTop: 100,
                textAlign: 'center',
                display: 'inline-block',
              },
              legend: {
                background: palette.primary1Color,
                color: palette.alternateTextColor
              }
            };
            const actions = [
                    <FlatButton
                      label="ok"
                      secondary={true}
                      onClick={this.handleClose}
                    />
                  ];
            var form =
            <form className='form' onSubmit={this.handleSubmit}>
              <legend style={style.legend}>Adminka!</legend>
                <TextField ref='email' type='email' hintText="Email"/>
                <TextField ref='password' type='password' hintText="Password" />
              <RaisedButton
                type='submit'
                className='button'
                label='Войти'
                primary={true}
                fullWidth={true} />
            </form>
      return (
        <div className="wrapper">
          <div className="flex">
            <Paper  style={style.page} children={form}/>
              <Dialog
                title="Ошибка входа"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                Данные для входа в админку не верны
          </Dialog>
          </div>
        </div>
      );
    }
  }
   export default withRouter(Login);
