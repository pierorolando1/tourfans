import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './ducks/authDuck';

import uiReducer from './ducks/uiDuck';

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer
});

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose || compose;


export default function generateStore() {


    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}