import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLocalStorageToken } from '../utils/localStorage';
import OrderSummaryIndex from '../components/orderSummary/OrderSummaryIndex'

class CreditCardDetailsForm extends React.Component {
    mapThroughCart = () => {
        this.props.items.map(item => this.handleCompletePurchase(item))
    };

    async handleCompletePurchase(item) {
        try {
            const token = getLocalStorageToken();
            await axios.post(
                process.env.REACT_APP_BACKEND_URL + '/api/orders/new-purchased-order', 
                {
                    height: item.configuration.height,
                    width: item.configuration.width,
                    depth: item.configuration.depth,
                    colour: item.configuration.colour,
                    price: item.configuration.price,
                    furnitureType: item.configuration.furnitureType
                },
                {
                    headers: { Authorisation: `Bearer ${token}` }
                }
            );
        } catch (err) {
            console.log(err.message);
        }
    }

    render() {
        return(
            <div className="grid">
                <form className="credit-card-details-form">
                     <div className="fields" >
                        <label className="name">
                            <h3>Full Name</h3>
                            <input name='fullName' type="text" placeholder="This is a fake form"></input>
                        </label>
                        <label className="card-numbers">
                            <h3>Card Number</h3>
                                <input name='cardNumber1' className="card-number" type="number" placeholder="1234" maxLength={4} min={0}></input>
                                <input name='cardNumber2' className="card-number" type="number" placeholder="1234" maxLength={4}></input>
                                <input name='cardNumber3' className="card-number" type="number" placeholder="1234" maxLength={4}></input>
                                <input name='cardNumber4' className="card-number" type="number" placeholder="1234" maxLength={4}></input>
                        </label>
                        <label className="expiry">
                            <h3>Expiry Date</h3>
                            <select name='expiryMonth' default={'01'}>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <input
                                name='expiryYear'
                                type="number"
                                default={'2020'}
                                max={'2050'}
                                min={'2020'}>
                            </input>
                        </label>
                        <label className="cvc">
                            <h3>CVC</h3>
                            <input name='cvc' type="number" placeholder="123"></input>
                        </label>
                    </div>
                    <Link to={'/payment-complete'}>
                        <button className="purchase-button" onClick={this.mapThroughCart}>
                            <span>Complete Purchase</span>
                        </button>
                    </Link>  
                </form>
                <div className="order-summary">
                        <OrderSummaryIndex /> 
                    </div> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
};


export default connect(mapStateToProps)(CreditCardDetailsForm);


// export default CreditCardDetailsForm