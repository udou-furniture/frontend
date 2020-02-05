import React from 'react';
import Slider from './slider';
import axios from 'axios'

import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import {getLocalStorageToken} from '../../utils/localStorage'

import '../../pages/ProductView.css';


function mapStateToProps(state) {
    return {
        name: state.order.name,
        type: state.order.type,
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour,
        price: state.configurator.price,
        example: state.configurator.example
    };
}

class FormContainer extends React.Component {
  priceCalculator = () => {
    //this calculates the price based on the sliders and dispatches it to store.

    var price =
      this.props.width * this.props.depth * this.props.height * 1000;
      price = price.toFixed(2)

      this.props.dispatch({ type: 'CALCULATE_PRICE', newPrice: price });

    return price;

  };

    displayNumber = num => {
        let result = num * 100;
        return result.toFixed(2);
    };

    handleOptionChange = e => {
        this.props.dispatch({ type: 'UPDATE_COLOUR', newColour: e.target.value });
    };


    handleSubmit = async e => {
    //   // this should send the info from the form to the post orders end point.
        e.preventDefault(); // i think this prevents page refresh.
        this.priceCalculator()

        const newOrder = {
            height: this.props.height,
            width: this.props.width,
            depth: this.props.depth,
            colour: this.props.colour,
            price: this.props.price,
            furnitureType: 'custom'
        };

        this.props.dispatch({
            type: 'ADD_TO_CART',
            newConfiguration: newOrder,
            newType: this.props.type,
            newName: this.props.name
        });
    };

    checkAuthedForSaveDesign = (e) => {
        e.preventDefault()
        if(!this.props.authed) {
            this.props.history.push('/login')
        } else {
            this.handleSaveDesignClick()
        }
    }

    handleSaveDesignClick = async () => {
        try {
            const token = getLocalStorageToken()
            await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/orders/new-saved-order', {
                height: this.props.height, 
                width: this.props.width, 
                depth: this.props.depth, 
                colour: this.props.colour,
                price: this.props.price, 
                furnitureType: this.props.furnitureType
            }, {
                headers: {Authorisation: `Bearer ${token}`}
            })
        }
        catch (err) {
            console.log(err.message)
        }
    };

    render() {
        return (
            <form className="slider-form" >
                <div className="price-block">
                <div className="price-display">
                    <h1>${this.priceCalculator()}</h1>
                    <button className="save-later-button" onClick={this.checkAuthedForSaveDesign}>Save for later</button>
                </div>
                </div>
                <div className="slider-block">
                <label className='height-sliding-block'>
                    <div className="slider-label">
                        <h4>Height</h4>
                        <p>{this.props.height * 120} cm</p>
                    </div>
                    <Slider
                    type="range"
                    // min={this.props.min}
                    min={0.5}
                    // max={this.props.max}
                    max={3}
                    // defaultValue={this.props.height}
                    value={this.props.height}
                    step={0.1}
                    onChange={e => {
                        this.props.dispatch({
                        type: 'UPDATE_HEIGHT',
                        newHeight: e.target.value
                        });
                    }}
                    />
                </label>
                <label className='depth-sliding-block'>
                    <div className="slider-label">
                    <h4>Depth</h4>
                    <p>{this.props.depth * 40} cm</p>
                    </div>
                    <Slider
                    type="range"
                    min={0.3}
                    max={1}
                    value={this.props.depth}
                    step={0.1}
                    onChange={e => {
                        this.props.dispatch({
                        type: 'UPDATE_DEPTH',
                        newDepth: e.target.value
                        });
                    }}
                    />
                </label>
                <label className='width-sliding-block'>
                <div className="slider-label">
                    <h4>Width</h4>
                    <p>{this.props.width * 120} cm</p>
                    </div>
                    <Slider
                    type="range"
                    min={0.5}
                    max={3}
                    value={this.props.width}
                    step={0.1}
                    onChange={e => {
                        this.props.dispatch({
                        type: 'UPDATE_WIDTH',
                        newWidth: e.target.value
                        });
                    }}
                    />
                </label>
                </div>
            
                <label>
                <div className="colour-block">
                    <p>Colour</p>
                    <div className="radio-block">
                    <div className="radio">
                        <label className='natural-radio'>
                        <input
                            type="radio"
                            value="Natural"
                            checked={this.props.colour === 'Natural'}
                            onChange={this.handleOptionChange}
                        />
                        <p>Natural</p>
                        </label>
                    </div>
                    <div className="radio">
                        <label className='black-radio'>
                        <input
                            type="radio"
                            value="Black"
                            checked={this.props.colour === 'Black'}
                            onChange={this.handleOptionChange}
                        />
                        <p>Black</p>
                        </label>
                    </div>
                    <div className="radio">
                        <label className='white-radio'>
                        <input
                            type="radio"
                            value="White"
                            checked={this.props.colour === 'White'}
                            onChange={this.handleOptionChange}
                        />
                        <p>White</p>
                        </label>
                    </div>
                    </div>  
                </div>
                </label>
                <label>

                <button className="add-to-cart-button" onClick={this.handleSubmit} type="submit">
                    Add To Cart
                </button>

                </label>
            </form>
        );
    }
}

export default withRouter(connect(mapStateToProps)(FormContainer));
