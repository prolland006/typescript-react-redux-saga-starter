import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Route, Router } from 'react-router';
import { App } from './app';
import { LooserContainer } from 'app/components';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/looser" component={LooserContainer}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
