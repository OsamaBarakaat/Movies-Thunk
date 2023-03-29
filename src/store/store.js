import { legacy_createStore as createStore } from "redux";
import favReducer from "./reducer/reducer";
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(favReducer, applyMiddleware(thunk))
export default store