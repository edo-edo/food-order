import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from './components/Router/Router';
import './index.css';
import Store from './store/Store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <Router />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
