import React from "react";

import { connect } from 'react-redux';

import ViewerContainer from './viewerContainer';
import FormContainer from './formContainer';

// const initialState = { height: 2, width: 2, depth: 2, colour: "White" }

function mapStateToProps(state) {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour
    }
}

class Configurator extends React.Component {
    render() {
        return (
            <div className="product-page-grid">
                <ViewerContainer />
                <FormContainer authed={this.props.authed}/>
            </div>
        )
    };
}

export default connect(mapStateToProps)(Configurator)