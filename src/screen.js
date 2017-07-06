import React, {Component} from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';

import todoReducer from './reducers/todos.reducer';

const middlewares = [thunk];
const logger = createLogger({
  duration: true,
  collapsed: true,
});
middlewares.push(logger);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware (
  combineReducers({
    todoReducer
  })
);

export default class Screen extends Component {
  render(){
    return(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}