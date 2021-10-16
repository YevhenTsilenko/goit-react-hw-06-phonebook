import { createStore } from "redux";
import { combineReducer } from "./redusers";

export const store = createStore(
    combineReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);