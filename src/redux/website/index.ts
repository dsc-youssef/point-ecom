// Dependences
import { combineReducers } from "redux";

// Reducers
import headerSlicer from "./reducers/header";

// Combine all reducers
export const websiteReducers = combineReducers({
  header: headerSlicer.reducer
})



