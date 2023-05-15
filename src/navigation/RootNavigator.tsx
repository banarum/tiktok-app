// create root navigator

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main/MainStackNavigator';

const RootNavigator = () => {
  const appState = () => {
    // Add conditions here to show splash screen or main navigator or auth navigator

    return <MainNavigator />;
  };

  return <NavigationContainer>{appState()}</NavigationContainer>;
};

export default RootNavigator;
