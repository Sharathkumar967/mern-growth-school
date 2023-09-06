// reducers.js
import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export default rootReducer;
