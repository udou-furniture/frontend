import React from "react";
import axios from 'axios'
import { connect } from "react-redux";

import {getLocalStorageToken} from '../../utils/localStorage'
import OrderSummaryCard from '../orderSummary/OrderSummaryCard'
import '../orderSummary/OrderSummaryCard.css'

function mapStateToProps(state) {
    return {
      items: state.cart.items,
      height: state.configurator.height,
      width: state.configurator.width,
      depth: state.configurator.depth,
      colour: state.configurator.colour,
      price: state.configurator.price
    };
}

class Item extends React.Component {
    handleRemoveCartClick = () => {
        this.props.removeFromCart(this.props);
    };

    checkAuthedForSaveDesign = () => {
        if(!this.props.authed) {
            this.props.history.push('/login')
        } else {
            this.handleSaveDesignClick()
        }
    }

    handleSaveDesignClick = async () => {
        try {
            const token = getLocalStorageToken()
            await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/orders/new-saved-order', {
				height: this.props.configuration.height, 
				width: this.props.configuration.width, 
				depth: this.props.configuration.depth, 
				colour: this.props.configuration.colour,
				price: this.props.configuration.price, 
				furnitureType: this.props.configuration.furnitureType
			}, {
                headers: {Authorisation: `Bearer ${token}`}
            })
        }
        catch (err) {
            console.log(err.message)
        }
    };

    render() {
        const { type, name  } = this.props;
        const {height, width, depth, price, colour} = this.props.configuration
        
        return (
            <div class="order-summary-grid">
                <h4>{type}</h4>
                <p>{name}</p>
                {/* <OrderSummaryIndex /> */}
                <OrderSummaryCard
                    // key={id}
                    height={height}
                    width={width}
                    depth={depth}
                    price={price}
                    colour={colour}
                />
                <button onClick={this.handleRemoveCartClick}>Remove from Cart</button>
                <button onClick={this.checkAuthedForSaveDesign}>Save For Later</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: (i) => { dispatch({ type: 'REMOVE_FROM_CART', removeItem: i})}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);