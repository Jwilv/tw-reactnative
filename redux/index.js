import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  isDarkMode: false,
};

const middleware = applyMiddleware(thunkMiddleware, createLogger());

const store = createStore(rootReducer, initialState, middleware);

export default store;
