import axios from "axios";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import history from "./history";
import { registerReducer } from "../redux/register";
import { loginReducer } from "../redux/login";
import { productsReducer } from "../redux/products";
import { ordersReducer } from "../redux/orders";

const reducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  orders: ordersReducer,
  products: productsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ axios, history }))
  )
);

export default store;
