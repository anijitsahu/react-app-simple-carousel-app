import React from 'react';

// Components
import Navigation from './Navigation'

const Carousel = (props) => {
	let src = `images/${props.srcNumber}.jpg`
	let { updateImage } = props
	
	return (
		<div className="carousel">
			<Navigation updateImage={updateImage} position={"left"} />
			<img src={src} width="300px" />
			<Navigation updateImage={updateImage} position={"right"} />
		</div>
	);
}


export default Carousel;