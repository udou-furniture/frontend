import React from 'react';

import {Link} from 'react-router-dom'

import sideboard from '../assets/sideboard-pic.jpg'
import './PaymentComplete.css'

class PaymentComplete extends React.Component {
    render() {
        return (
            <div id="payment-complete-page" >
                <div className="grid">
                    <div className="complete-content">
                        <div className="payment-text">
                            <h1>Thanks for buying!</h1>
                            <br/>
                            <br/>
                            <br/>
                            <h3>Go to <Link to='/account'>My Account</Link> to see your purchases</h3>
                        </div>
                        <img id='sideboard-image' src={sideboard}/>
                    </div>
                </div>
            </div>
                
        )
    }
}
export default PaymentComplete