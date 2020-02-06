const orderReducer = (state = { type: "My custom design 👌", name: "" } , action) => {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_TYPE':
      newState = { ...state, type: action.newType };
      break;
    case 'UPDATE_NAME':
      newState = { ...state, name: action.newName };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default orderReducer;
