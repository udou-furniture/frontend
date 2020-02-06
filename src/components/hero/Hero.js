import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom'; 


const Hero = () => {
	return(
		<div id="hero" >
			<div className="hero-grid">
				<div className="hero-text">
					<h1>Furniture to fit any home</h1>
					<Link to="/product_view" className="button-hero">Get yours</Link>
				</div>
				<div className="box"></div>
			</div>
		</div> 
	)
}

export default Hero;