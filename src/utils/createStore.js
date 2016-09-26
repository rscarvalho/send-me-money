import reducers from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import once from 'lodash/once';

function _createStore(initialState = {}) {
  const enhancer = compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(reducers, initialState, enhancer);
}

export default once(_createStore);