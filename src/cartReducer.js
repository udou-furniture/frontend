const	initState = {
	products: [
		{id: 1, type: "bookshelf", name: "Type01", configuration: {
			height: 2.1,
			width: 1,
			depth: 0.4,
			colour: "natural",
			price: 99,
			furnitureType: 'custom'
		}},
		{id: 2, type: "bookshelf", name: "Type02"},
		{id: 3, type: "bookshelf", name: "Type03"},
		{id: 4, type: "wallunit", name: "Type01"},
		{id: 5, type: "wallunit", name: "Type02"},
		{id: 6, type: "wallunit", name: "Type03"},
		{id: 7, type: "sideboard", name: "Type01"},
		{id: 8, type: "sideboard", name: "Type02"},
		{id: 9, type: "sideboard", name: "Type03"}
	],
	cart: []
}

const cartReducer = (state = initState, action) => {
	let newState = {};
	console.group(action.type);
	switch (action.type) {
    case 'ADD_TO_CART':
			const product = state.products.find(product => product.id === action.id);
      newState = { ...state, cart: state.cart.concat(product) };
			break;
		case 'REMOVE_FROM_CART':
			const newCart = state.cart.filter(product => product.id !== action.id);
			newState = { ...state, cart: newCart };
			break;	
    default:
      newState = {...state}
	}
  return newState;
};

export default cartReducer;


