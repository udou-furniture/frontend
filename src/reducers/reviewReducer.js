const initialState = { reviews: [] };

const reviewReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_REVIEWS':
      newState = { ...state, reviews: action.newReviews };
      break;

    default:
      newState = { ...state };
  }
  return newState;
};

export default reviewReducer;
