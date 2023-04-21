// Dependences
import { combineReducers, createStore } from "redux";

// Layouts Reducers
import { websiteReducers } from "./website";


// Combine all layouts
const reducers = combineReducers({
  website: websiteReducers
})

// Create Store
export const store = createStore(reducers);

// Get Store Map
export type storeMap = ReturnType<typeof reducers>;