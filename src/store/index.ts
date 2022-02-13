import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    composeWithDevTools()
))
