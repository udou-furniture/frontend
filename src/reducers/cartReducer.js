const cartReducer = (state = { items: [] }, action) => {
  let newState = {};

  switch (action.type) {
    case 'REMOVE_FROM_CART':
      // this needs to isolate cart that matches item in array.
      const newCart = state.items.filter(
        item => item.configuration !== action.removeItem.configuration
      );

      newState = { ...state, items: newCart };
      break;
    case 'ADD_TO_CART':
      let newProduct = {
        id: 'ID',
        type: action.newType,
        name: action.newName,
        configuration: action.newConfiguration
      };
      newState = { ...state, items: state.items.concat(newProduct) };
      break;

    default:
      newState = { ...state };
  }

  return newState;
};

export default cartReducer;
