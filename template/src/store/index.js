import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    // secondMiddleware,
  ),
);

const store = createStore(
  rootReducer,
  // secondReducer,
  enhancers,
);

export default store;
