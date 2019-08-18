import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './header';
import store from '../store';
ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <Header />
    </Provider>
  </Fragment>
  ,
  document.getElementById('root')
)