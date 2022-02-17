import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createEpicMiddleware} from "redux-observable";
import {rootEpics} from "../epics";

// export const store = createStore(rootReducer, compose(
//     applyMiddleware(thunk),
//     composeWithDevTools()
// ))

const epicMiddleware = createEpicMiddleware()

export const store = createStore(rootReducer, compose(
    applyMiddleware(epicMiddleware),
    composeWithDevTools()
))

epicMiddleware.run(rootEpics)
