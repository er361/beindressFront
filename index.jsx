require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import ReactDOM from 'react-dom';
import React from 'react';

import Slider from './components/Slider/Slider.jsx';
import BlockSkidki from './components/BlockSkidki/BlockSkidki.jsx';


ReactDOM.render(<Slider />, document.querySelector("#myApp"));
ReactDOM.render(<BlockSkidki />, document.querySelector("#app2"));
