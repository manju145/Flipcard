import  {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductDetailsReducer, getProductsReducer } from './reducer/productReducer';
import {cartReducer} from "./reducer/cartReducer";
import { getmobileProductsReducer } from "./reducer/mobileReducer";

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    getmobileProducts:getmobileProductsReducer,
    cart:cartReducer
});

const middleware= [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)




export default store;