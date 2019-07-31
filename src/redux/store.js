import { createStore, applyMiddleware } from 'redux';
import rotateReducer from './reducers/rotateReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer, state, composeWithDevTools());
}

export default configureStore;
