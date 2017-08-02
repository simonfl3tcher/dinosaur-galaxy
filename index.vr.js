import React from 'react';
import { AppRegistry } from 'react-vr';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import vrsaurusReducer from './vr/reducers';
import Root from './vr/components/Root';

let store = createStore(vrsaurusReducer, applyMiddleware(thunk));

class VRsaurus extends React.Component {
  render() {
    return <Provider store={store}>
      <Root />
    </Provider>;
  }
}

AppRegistry.registerComponent('VRsaurus', () => VRsaurus);
