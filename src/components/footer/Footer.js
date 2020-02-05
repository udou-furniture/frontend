import React from 'react';
import facebook from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram-icon.png';
import './Footer.css';

const Footer = () => {
	return(
		<footer>
			<div class="grid">
				<p class="copyright"> &copy; 2020 Udou Furniture</p>
				<ul class="social">
					<li><a href="#"><img src={facebook} alt="facebook"></img></a></li>
					<li><a href="#"><img src={instagram} alt="instagram"></img></a></li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer;

