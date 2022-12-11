//now you have to create store
import { createStore } from "redux";
// import { configureStore } from "redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers);
// const store = configureStore(rootReducers);
export default store;