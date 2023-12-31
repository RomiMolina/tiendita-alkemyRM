
import { createStore, combineReducers } from 'redux';
import productReducer from '../reducer/index.jsx';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
