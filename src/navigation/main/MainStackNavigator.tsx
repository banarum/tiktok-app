import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigator} from '../bottomTabs/BottomTabNavigator';
import {ScreenNames} from '../../utils/AppConstants';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ScreenNames.MainStack.BOTTOM_TABS}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
