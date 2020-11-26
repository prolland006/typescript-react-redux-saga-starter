import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Route, Router } from 'react-router';
import { App } from './app';
import { EarthResourceComponent } from 'app/components/earth-resource';
import { LooserComponent } from 'app/components/looser';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/looser" component={LooserComponent}></Route>
    <Route exact path="/resource" component={EarthResourceComponent}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
