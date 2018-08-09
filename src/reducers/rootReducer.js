import { combineReducers } from "redux";
import { loading } from "./loading";
import { errors } from "./errors";
import { conferences } from "./conferences";
import { reducer as formReducer } from "redux-form";

/**
 * Root reducer for the app that
 * combines individual reducers
 */
export const rootReducer = combineReducers({
  loading,
  errors,
  conferences,
  form: formReducer
});
