import React from 'react';
import {Link, withRouter} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import auth from '../Login/auth.js';
import classNames from 'classnames';

class Admin extends React.Component {
  state = {
    open: false,
    loggedIn: auth.loggedIn()
  }
  logout = () => {
    auth.logout();
    this.props.router.replace('/');
  }
  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  }
  updateAuth = (loggedIn) => {
    this.setState({
      loggedIn
    })
  }

  render() {
    const logoutClass = classNames({
      "hide": !this.state.loggedIn
    });

    return (
      <div>
        <AppBar
          title={<Link className='Link' to='/' >Beindress</Link>}
          iconElementRight={<FlatButton className={logoutClass} onClick={this.logout} label="Log out" />}
          />
          <Drawer
            open={this.state.open}
            zDepth={0}>
               <MenuItem>Menu Item 2</MenuItem>
             </Drawer>
      </div>
    );
  }
}
export default withRouter(Admin)
