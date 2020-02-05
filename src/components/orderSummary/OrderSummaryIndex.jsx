import React from 'react';

import { connect } from 'react-redux';

import OrderSummaryCard from './OrderSummaryCard';

function mapStateToProps(state) {
  return {
    items: state.cart.items,
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price
  };
}

class OrderSummaryIndex extends React.Component {
  createArray = allItems => {
    if (this.props.items.length > 0)
    {
    return allItems.map(i => {
      return (
        <OrderSummaryCard
          key={i.id}
          name={i.name}
          type={i.type}
          height={i.configuration.height}
          width={i.configuration.width}
          depth={i.configuration.depth}
          price={i.configuration.price}
          colour={i.configuration.colour}
        />
      );
    });
  }
  };

  render() {
    return <ul>{this.createArray(this.props.items)}</ul>;
  }
}

export default connect(mapStateToProps)(OrderSummaryIndex);