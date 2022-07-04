import { combineReducers } from "redux";
import taskReducer from "./index";

const rootReducer = combineReducers({ tasks: taskReducer });

export default rootReducer;
