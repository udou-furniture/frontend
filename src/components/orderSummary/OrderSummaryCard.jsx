import React from 'react';

class OrderSummaryCard extends React.Component {
    render() {
        return (
            <li className="card" key={this.props.id}>
                <div>Dimensions: {this.props.height * 120 }{' '} x {this.props.depth* 40}{' '} x {this.props.width * 120}</div>
                <div>Colour: {this.props.colour}</div>
                <div>Price: {this.props.price}</div>
            </li>
        )
    }
}

export default OrderSummaryCard;