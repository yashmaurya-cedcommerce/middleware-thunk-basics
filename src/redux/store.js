import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import fetchReducer from "./reducer";

const store = createStore(fetchReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store
