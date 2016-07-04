import React from 'react';
import {Link, withRouter} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import auth from '../Login/auth.js';
import './Admin.scss';
import {List, ListItem} from 'material-ui/List';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {cyan500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

class Admin extends React.Component {
  state = {
    open: true,
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

  handleChange = (open,reason) => {
    this.setState({open})
  }

  render() {
    const logoutClass = classNames({
      "hide": !this.state.loggedIn
    });


    var links =
          <List>
            <Link className='menuLink' to='TopBlock'><ListItem primaryText='Верхний блок скидок'/></Link>
            <Link className='menuLink' to='Links'><ListItem primaryText='Средний блок ссылки'/></Link>
          </List>

    return (
      <div>
        <AppBar
          title={<Link className='Link' to='/' >Beindress</Link>}
          iconClassNameLeft='hide'
          iconElementRight={<FlatButton className={logoutClass} onClick={this.logout} label="Log out" />}
          />
        <div  className="row">
          <div className="col-md-2"><Paper className='leftNav'>{links}</Paper></div>
          <div className="col-md-10">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Admin)
