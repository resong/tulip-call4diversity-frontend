import { combineReducers } from "redux";
import { loading } from "./loading";
import { conferences } from "./conferences";
/**
 * Root reducer for the app that
 * combines individual reducers
 */
export const rootReducer = combineReducers({
  loading,
  conferences
});
