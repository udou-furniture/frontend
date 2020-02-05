// const initialState =

const configuratorReducer = (
  state = { height: 1, width: 1, depth: 1, colour: 'Black', example: 1 },
  action
) => {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_HEIGHT':
      newState = { ...state, height: action.newHeight };
      break;

    case 'UPDATE_WIDTH':
      newState = { ...state, width: action.newWidth };
      break;
    case 'UPDATE_DEPTH':
      newState = { ...state, depth: action.newDepth };
      break;
    case 'UPDATE_COLOUR':
      newState = { ...state, colour: action.newColour };
      break;
    case 'CALCULATE_PRICE':
      newState = { ...state, price: action.newPrice };
      break;
    case 'UPDATE_EXAMPLE':
      newState = { ...state, example: action.newExample };
      break;
    case 'SET_DEFAULTS':
      // newState = Object.assign({}. state, {height: action.newHeight,
      //   width: action.newWidth,
      //   depth: action.newDepth,
      //   colour: action.newColour
      //   })
      newState = {
        ...state, 
        height: action.exampleConfig.newHeight,
        width: action.exampleConfig.newWidth,
        depth: action.exampleConfig.newDepth,
        colour: action.exampleConfig.newColour
      };
      break;

    default:
      newState = { ...state };
  }
  return newState;
};

export default configuratorReducer;
