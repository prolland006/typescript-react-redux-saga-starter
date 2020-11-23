import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState, rootReducer } from 'app/reducers';
import { logger, thunk } from 'app/middleware';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState?: RootState): Store<RootState> {
  const middlewares = [thunk, logger, sagaMiddleware];
  let middleware = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer as any, 
    initialState as any, 
    middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      console.log('module.hot2');
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }
  sagaMiddleware.run(rootSaga);

  return store;
}

