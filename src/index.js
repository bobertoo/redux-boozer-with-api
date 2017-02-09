import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise'
// import { fetchCocktails } from './actions'
import App from './components/app'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// store.dispatch( fetchCocktails() );

console.log(store.getState());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('container')
)
