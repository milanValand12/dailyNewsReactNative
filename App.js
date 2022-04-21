import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

import MainNavigation from './src/navigations/MainNavigation';
import COLORS from './src/constants/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <MainNavigation />
    </Provider>
  );
};

export default App;
