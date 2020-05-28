import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './appReducer';

const reducers = combineReducers({
  app: appReducer,
});

const composeEnhancers = ((window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()) || compose;


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    composeEnhancers,
  ),
);

export default store;
