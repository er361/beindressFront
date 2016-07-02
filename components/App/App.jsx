import React from 'react';
import '../global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import skidkiImg1 from  '../../assets/images/1_ekran_bg_02.png';
import BlockSkidki from '../BlockSkidki/BlockSkidki.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
