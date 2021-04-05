import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import { songsReducers } from './songs/index';

const reducers = combineReducers({
    ...songsReducers,
});

export default () => {
  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk, promise)),
  );

  return store;
};
