import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
