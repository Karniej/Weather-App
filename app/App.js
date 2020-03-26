import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { HomeScreen } from 'screens';
const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
