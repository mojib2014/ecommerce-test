//The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
//The resulting reducer calls every child reducer, and gathers their results into a single state object.
//https://redux.js.org/api/combinereducers#:~:text=The%20combineReducers%20helper%20function%20turns,you%20can%20pass%20to%20createStore%20.
//now we add them in rootReducers
import addItem from "./addItem";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
  addItem
});
export default rootReducers;