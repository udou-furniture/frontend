import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import ReviewCard from './ReviewCard';

function mapStateToProps(state) {
    return {
        reviews: state.review.reviews
    };
}

class CardIndex extends React.Component {
    componentDidMount() {
        this.getReviews();
    }

    getReviews = async () => {
        try {
            let response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/api/orders/reviews');
        
            const allReviews = response.data

            let nonEmptyReviews = allReviews.filter(order => order.review.length > 0)
            
            const fiveReviews = nonEmptyReviews.slice(0, 4)

            this.setReviews(fiveReviews);
        } catch (err) {
            console.log(err);
        }
    };

    setReviews = e => {
        this.props.dispatch({ type: 'UPDATE_REVIEWS', newReviews: e })
    };

    createArray = allReviews => {
        const nameArray = ["Melissa", "Mark", "Kyle", "Izzy", "Molly"]
        return allReviews.map((i, index) => {
            return <ReviewCard 
                key={i.id} 
                review={i.review} 
                date={i.updatedAt}
                name={nameArray[index % nameArray.length]}
            />
        });
    };

    render() {
        return (
          <div id="reviews">
            <div className="review-card-grid">
              {this.createArray(this.props.reviews).map(reviewCard => {
                return reviewCard;
              })}
            </div>
          </div>
        );
    }
}

export default connect(mapStateToProps)(CardIndex);
