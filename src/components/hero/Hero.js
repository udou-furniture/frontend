import React from 'react';
import './Hero.css';


const Hero = () => {
	return(
		<div id="hero" >
			<div className="hero-grid">
				<div className="hero-text">
					<h1>Furniture to fit any home</h1>
					<a className="button-hero">Get yours</a>
				</div>
				<div className="box"></div>
			</div>
		</div> 
	)
}

export default Hero;