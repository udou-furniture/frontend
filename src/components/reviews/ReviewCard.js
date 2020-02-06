import React from 'react';
import './ReviewCard.css';
import FurnitureIcon from '../../assets/furniture-icon.png';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ReviewCard extends React.Component {
    render() {
        return (
        <div className="review-card" key={this.props.id}>
            <img className="furniture-icon" src={FurnitureIcon} />
            <div className="review-card-content">
                <div className="name-date">
                    <p>{this.props.name}</p>
                    <p>27/08/2019</p>
                </div>    
                <div className="five-stars">
                    <FontAwesomeIcon color="#37b49c" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="#37b49c" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="#37b49c" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="#37b49c" size="xs" icon={faStar}/>
                    <FontAwesomeIcon color="#37b49c" size="xs" icon={faStar}/>
                </div>
                <div className="review-text">
                    <p>{this.props.review}</p>
                </div>    
            </div>

        </div>
        );
    }
}

export default ReviewCard;
