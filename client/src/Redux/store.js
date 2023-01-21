import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer"
import { cartReducer } from "./CartData/Cart.Reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ Auth:AuthReducer, Cart:cartReducer})

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export { store }

