import { createStore } from "redux";
import Reducers from "./Reducers/CombinedReducer";
import { Savetolocalstorage, Getfromlocalstorage } from "../loadstate";

const persistedstate = Getfromlocalstorage();


const store = createStore(Reducers, persistedstate, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(()=>Savetolocalstorage(store.getState()));
export default store;