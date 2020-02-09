import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";

const reducers = combineReducers({ getData: shopReducer });

export default reducers;
