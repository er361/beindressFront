import React from 'react';
import '../global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import skidkiImg1 from  '../../assets/images/1_ekran_bg_02.png';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



export default class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
