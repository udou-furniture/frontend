import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart/CartIcon';
import LoungeRoom from '../../assets/lounge-room.jpg';
import './Navbar.css';
import { CSSTransition } from "react-transition-group";

class Navbar extends React.Component {
	logout = () => {
		localStorage.removeItem('authorisation')
		this.props.isUserLoggedIn()
	}

	render() {
		const { linkOn } = this.props
		return (
			<nav className="site-nav">
				<div className="nav-content-grid">
					<h1 id="logo"><Link to="/">UDOU</Link></h1>
					<span className="line"></span>
					<div className="links">
							<Link className="display" onClick={() => linkOn ? null : this.props.toggleDropdown()}>
								Shelves
							</Link>

						{this.props.authed ? 
						<>
							<Link to="/" onClick={() => this.logout()}>Log out</Link>
							<Link to="/account">My account</Link>
						</> :
						<>
							<Link to="/registration">Registration</Link>
							<Link to="/login">Login</Link>
						</>	
						}
						<CartIcon authed={this.props.authed} history={this.props.history}/>
					</div>
				</div>	
				<div className="container">
					<CSSTransition
						in={this.props.dropdown}
						timeout={400}
						classNames="list-transition"
						unmountOnExit
						appear
						onEntered={this.listSwitch}
						onExit={this.listSwitch}
					>
						<div className="list-body">
							<div className="secondary grid">
								{/* <ul className="list">
									<li className="list-item">Bookshelves</li>
									<li className="list-item"> Wall units</li>
									<li className="list-item"> Sideboards</li>
								</ul> */}
								<div className="list-item one">
									<Link to={{pathname: "/products/bookshelf"}}>
										<div className="dropdown-card-img-container">
											<img className="dropdown-image" src={LoungeRoom} alt="placeholder"></img>
										</div>
										<div className="dropdown-card-content">
											<h4>Bookshelves</h4>
										</div>										
									</Link>
								</div>
								<div className="list-item two">
									<Link to={{pathname: "/products/wallunit"}}>
										<div className="dropdown-card-img-container">
											<img className="dropdown-image" src={LoungeRoom} alt="placeholder"></img>
										</div>
										<div className="dropdown-card-content">
											<h4>Wall Units</h4>
										</div>	
									</Link>
								</div>
								<div className="list-item three">
									<Link to={{pathname: "/products/sideboard"}}>
										<div className="dropdown-card-img-container">
											<img className="dropdown-image" src={LoungeRoom} alt="placeholder"></img>
										</div>
										<div className="dropdown-card-content">
											<h4>Sideboards</h4>
										</div>
									</Link>
								</div>
							</div>
          	</div>
        	</CSSTransition>
      	</div>
			</nav>
		)
	}
}

export default Navbar;

