import React from 'react';
import './ReviewCard.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ReviewCard extends React.Component {
    render() {
        return (
        <div className="review-card" key={this.props.id}>
            <span className="circle"></span>
            <div className="name-date-star">
                <p>{this.props.name}</p>
                <p className="review-date">27/08/2019</p>
                <div className="five-stars">
                    <FontAwesomeIcon color="black" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="black" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="black" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="black" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="black" size="xs" icon={faStar}/>
                </div>

            </div>
            <div className="review-text">
                <p>{this.props.review}</p>
            </div>
   
        </div>
        );
    }
}

export default ReviewCard;
