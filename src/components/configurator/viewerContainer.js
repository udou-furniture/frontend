import React from 'react';

import { connect } from 'react-redux';

import Viewer from './viewer';

function mapStateToProps(state) {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour
    }
}

class ViewerContainer extends React.Component {
    render() {
        return (
            <div className="viewer-container">
                <Viewer />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ViewerContainer);
