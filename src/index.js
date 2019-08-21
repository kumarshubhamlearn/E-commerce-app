import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import { BrowserRouter } from 
'react-router-dom';
import rootReducer from './redux/reducers/rootReducer';


import './index.css';
import App from './App'; 

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
