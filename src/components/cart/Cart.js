import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import Item from "./Item";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Cart extends React.Component {
    renderItems() {
        if (this.props.items.length > 0) {
            return this.props.items.map(item => 
                <Item authed={this.props.authed} {...item} history={this.props.history}/> )
        } else {
            return (
                <p>Cart is empty. Keep shopping!</p>
            )
        }
    }

    renderCheckoutButton() {
        if(this.props.items.length > 0) {
            return <Link 
                        onClick={this.handleCheckoutClick}>
                        <button className="proceed-button" type='button'>
                        <FontAwesomeIcon className="proceed-shopping-cart-icon" color="white" size="lg" icon={faShoppingCart} /> 
                        Proceed to checkout</button>
                    </Link>
        }
    }

    handleCheckoutClick = () => {
        if(!this.props.authed) {
            this.props.history.push('/login')
        } else {
            this.props.history.push('/checkout')
        }
    }

    render() {
        return (
        <div>
            {this.renderItems()}
            {this.renderCheckoutButton()}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
};

export default withRouter(connect(mapStateToProps)(Cart));
