import React from 'react';
import '../global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import skidkiImg1 from  '../../assets/images/1_ekran_bg_02.png';
import BlockSkidki from '../BlockSkidki/BlockSkidki.jsx';

export default class App extends React.Component {
  render() {
    var text = "изысканные вечерние платья с неприличной скидкой 50%";
    return (
      <div className="skidkiWrapper">
        <div className="container">
          <div className='pull-left  imgOverlayTextLeft'>
            <p>beindress</p>
            <p>интернет-магазин женских платьев</p>
          </div>
          <div className='pull-right imgOverlayTextRight'>
            <p>8 (499) 390 82 43</p>
            <p>
              м.Пушкинская <br/>
              Леонтьевский пер. 5 <br/>
              пн-сб с 9-17 00
            </p>
          </div>
          <BlockSkidki
            src= {skidkiImg1}
            imgClass='img-responsive'
            text={text} />
        </div>
      </div>
    );
  }
}
