import React from 'react';

import CreditCardDetailsForm from '../components/CreditCardDetailsForm'

import './Payment.css';

class Payment extends React.Component {
    render() {
        return (
            <div id="payment-page">
                <CreditCardDetailsForm />
            </div>
        )
    } 
}

export default Payment
