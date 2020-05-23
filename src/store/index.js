import { createStore } from "redux";
import homeReducer from "../Containers/Home/reducer";

const store = createStore(homeReducer);


window.store = store;

export default store;
