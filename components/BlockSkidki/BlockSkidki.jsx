import React from 'react';
import './BlockSkidki.scss';

export default class BlockSkidki extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className='imageContainer'>
				{/*<img src={this.props.src} className={this.props.imgClass + ' imgBg'}/>*/}
				<p className='text'>{this.props.text}</p>
				<a href="#" className="myButton">
					Смотреть каталог
				</a>
				<p className='textBottom'>При нажатии на кнопку, вы просто <br/>
						перейдете в интернет-магазин...</p>
			</div>
		);
	}
}
