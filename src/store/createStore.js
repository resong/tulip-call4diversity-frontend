import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers/rootReducer';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  middleware = [...middleware, logger];
}

/**
 * Redux store creation, incorporating redux-thunk
 */
export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middleware)
);
