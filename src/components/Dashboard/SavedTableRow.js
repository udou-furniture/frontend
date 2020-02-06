import React from 'react'
import axios from 'axios'
import './Dashboard.css';
import FurnitureIcon from '../../assets/furniture-icon.png';
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {getLocalStorageToken} from '../../utils/localStorage'

class SavedTableRow extends React.Component {
    handleRemoveDesign = async () => {
        try {
            const token = getLocalStorageToken()
            await axios.patch(process.env.REACT_APP_BACKEND_URL + '/api/orders/remove-saved-order', {
                orderID: this.props.order._id
            }, {
                headers: {Authorisation: `Bearer ${token}`}
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        console.log(this.props.order)
        return (
            <div className="purchased-card">
                <img className="furniture-icon" src={FurnitureIcon} />
                <div className="purchased-card-info">
                    <div className="colour-selection">
                        <p>{this.props.order.configuration.colour}</p>
                    </div>
                    <div className="dimensions">
                        <p>{this.props.order.configuration.height * 120 }{' '} x {this.props.order.configuration.depth* 40}{' '} x {this.props.order.configuration.width * 120}</p>
                    </div>
                    <div className="purchased-card-price">
                        <p>${this.props.order.configuration.price} AUD</p>
                    </div>
                </div>
                <a className="button-remove-saved" type='button' onClick={this.handleRemoveDesign}>
                <FontAwesomeIcon className="trash-icon" color="#4a5568" size="sm" icon={faTrashAlt} />Remove</a>
            </div>
        );
      }
}

export default SavedTableRow