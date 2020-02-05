import React from 'react'
import axios from 'axios'

import {getLocalStorageToken} from '../utils/localStorage'

import CustomerDetailsForm from '../components/CustomerDetailsForm'

import './Checkout.css';

class Checkout extends React.Component {
    submit = async (values) => {
        try {
            const token = getLocalStorageToken()
            await axios.patch(process.env.REACT_APP_BACKEND_URL + '/api/customer/new-customer-details', {
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                state: values.state,
                postcode: values.postcode,
                phoneNumber: values.phoneNumber
            }, {
                headers: {Authorisation: `Bearer ${token}`}
            })
            this.props.history.push('/payment')
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return(
            <div id="checkout-page">
                <CustomerDetailsForm onSubmit={this.submit}/>
            </div>
        )
    }
}

export default Checkout
