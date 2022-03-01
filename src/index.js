import React from 'react';
import {MainStackScreen} from './navigation/navigation';
import {Provider} from 'react-redux';
import Store from './redux/store';

export default App = () => {
  return (
    // <Provider store={Store}>
    <MainStackScreen />
    // </Provider>
  );
};
