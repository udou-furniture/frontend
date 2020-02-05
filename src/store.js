import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import configuratorReducer from './reducers/configuratorReducer';
import reviewReducer from './reducers/reviewReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
    // ...Place all reducers here
    cart: cartReducer,
    order: orderReducer,
    configurator: configuratorReducer,
    review: reviewReducer,
    form: formReducer
});

export const store = createStore( rootReducer );
