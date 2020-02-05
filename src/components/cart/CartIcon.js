import React from "react";
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';

import { connect } from "react-redux";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cart from './Cart';

import './Cart.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class CartIcon extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }


    renderItemsCounter() {
        if (this.props.number < 1) {
            return null;
        } else 
            return (
            <>
                {this.props.number}
            </>
        )
    }

    render() {
        return (
          <div ref={ref => this.el = ref}>
            {/* <img className="shopping-cart" onClick={() => this.setState({ isPaneOpen: true })}src={icon} alt="Cart" /> */}
            <FontAwesomeIcon className="shopping-cart" onClick={() => this.setState({ isPaneOpen: true })}color="white" size="2x" icon={faShoppingCart} /> 
            <span className="items-counter">
              {this.renderItemsCounter()}
            </span>
            <SlidingPane
              className="some-class"
              overlayClassName='some-custom-overlay-class'
              isOpen={ this.state.isPaneOpen }
              title='Your Cart'
              subtitle=""
              width="500px"
              onRequestClose={ () => {
                  // triggered on "<" on left top click or on outside click
                  this.setState({ isPaneOpen: false });
              } }>
              <Cart authed={this.props.authed} history={this.props.history}/>
            </SlidingPane >
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        number: state.cart.items.length
    };
};

export default (connect(mapStateToProps)(CartIcon))


