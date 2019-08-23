import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import logger from 'redux-logger';
import {Provider} from 'react-redux';
import { BrowserRouter } from 
'react-router-dom';
import rootReducer from './redux/reducers/rootReducer';


import './index.css';
import App from './App'; 

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persitor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persitor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
