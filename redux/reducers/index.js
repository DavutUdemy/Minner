import { combineReducers } from "redux";
import locationReducer from "./locationReducer";

let reducers = combineReducers({
  locationReducer: locationReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;