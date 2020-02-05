import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import Item from "./Item";


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
            return <Link onClick={this.handleCheckoutClick}><button type='button'>Proceed to Checkout</button></Link>
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



// import React, { Component } from 'react';
// import { Icon } from 'antd';
// import './style.css';

// export default class ExampleCss extends Component {
//   constructor(props) {
//     super(props);
//     this.wrapperRef = React.createRef();
//   }

//   handleClick() {
//     const wrapper = this.wrapperRef.current;
//     wrapper.classList.toggle('is-nav-open')
//   }

//   render() {
//     return (
//       <div ref={this.wrapperRef} className="wrapper" >
//         <div className="nav">
//           <Icon className="nav__icon" type="menu-fold" onClick={() => this.handleClick()} />
//           <div className="nav__body">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus est laudantium libero nam omnis optio repellat sit unde voluptatum?
//           </div>
//         </div>
//       </div>
//     );
//   }
// }