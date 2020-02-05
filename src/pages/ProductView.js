import React from 'react';
import Configurator from '../components/configurator/Configurator'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour,
        price: state.configurator.price,
        type: state.order.type,
        name: state.order.name,
    };
};

class ProductView extends React.Component {
    render() {
        return (
            <div className="product-page-wrapper">
                <Configurator authed={this.props.authed}/>
            </div>
        );
    };
}

export default connect(mapStateToProps)(ProductView);