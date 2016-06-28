import React from 'react';
import ReactDOM from 'react-dom';
import '../../vendor/bower/slick-carousel/slick/slick.css';
import './Slider.scss';
import SlickSlider from 'react-slick';

export default class Slider extends React.Component {
	render() {
		var settings = {
		 dots: true,
		 infinite: true,
		 speed: 700,
		 slidesToShow: 1,
		 slidesToScroll: 1,
		 fade: true
	 };
		return (
			<div>
				<SlickSlider className='slider' {...settings}>
					<div className="test"></div>
					<div className="test2"></div>
				</SlickSlider>
			</div>
		);
	}
}
