import { combineReducers } from "redux";
import coffeesReducer from "./coffeesReducer";
import usersReducer from "./usersReducer";


const reducers = combineReducers({
  coffees: coffeesReducer,
  users: usersReducer
});

export default reducers;