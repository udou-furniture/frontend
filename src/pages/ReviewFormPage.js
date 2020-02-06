import React from 'react'
import axios from 'axios'

import ReviewForm from '../components/Dashboard/ReviewForm'

class ReviewFormPage extends React.Component {
    submit = async (values) => {
        try {
            const token = localStorage.getItem('authorisation')
            await axios.patch(process.env.REACT_APP_BACKEND_URL + '/api/orders/new-review', {
                review: values.review,
                orderID: this.props.match.params.orderID
            }, {
                headers: {Authorisation: `Bearer ${token}`}
            })
            this.props.history.push('/account')
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const {orderID} = this.props.match.params
        return(
            <div id="review-form-page">
                <ReviewForm onSubmit={this.submit}/>
            </div>
        )
    }
}

export default ReviewFormPage