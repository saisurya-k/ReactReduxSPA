import { Provider } from 'react-redux';
import store from './store/configureStore';
import { render } from 'react-dom';
import routes from './routes';
import React from 'react';
import { Router } from 'react-router';
import browserHistory from 'history/createBrowserHistory';

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes()} />
  </Provider>,
  document.getElementById('app')
);