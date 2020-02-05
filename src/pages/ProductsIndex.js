import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import './ProductsIndex.css';
import greenDrawers from '../assets/green-drawers.jpg';
import productsList from '../productsList';

function mapStateToProps(state) {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour,
        price: state.configurator.price
    };
}

class ProductsIndex extends React.Component {
    handleClick(id, e) {
    // this function takes the id number that was passed through with the menu list item that was created and finds the item in the productsList array that matches it.
        var example;
        productsList.forEach(i => {
            if (i.id === id) {
                example = i;
                
                return example;
            }
        });
        this.setDefaultConfig(example);
    }

    setDefaultConfig = example => {
        let exampleConfig = {
            newHeight: example.configuration.height,
            newWidth: example.configuration.width,
            newDepth: example.configuration.depth,
            newColour: example.configuration.colour	
        };
        this.props.dispatch({
            type: 'UPDATE_TYPE',
            newType: example.type
        });
      
        this.props.dispatch({
            type: 'UPDATE_NAME',
            newName: example.name
        });
          
        this.props.dispatch({ 
            type: 'SET_DEFAULTS', 
            exampleConfig 
        });
    };

    render() {
        const { type } = this.props.match.params;
        const products = productsList
        .filter(product => {
            return product.type === type;
        })
        .map((product, key) => (
			<div className="product-card" key={product.id}>
				<div className="product-card-img-container">
					<img src={greenDrawers}></img>
				</div>
                <div className="product-card-content">
                    <Link to={product.type + '/' + product.id} onClick={e => this.handleClick(product.id, e)} className="customise-button">Customise</Link>
                </div>
			</div>
        ));

        return (
			<div id="product-index">	
				<div className="product-index-grid">
					{products}
				</div>
			</div>	
      // maybe i could pass the params inside the div tag? defaultConfigId= {product.id} and then load this from the config page
        );
    }
}

export default connect(mapStateToProps)(ProductsIndex);
