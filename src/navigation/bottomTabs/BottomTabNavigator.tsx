/* eslint-disable react/no-unstable-nested-components */
// @flow
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabButton} from '../../ui/components/BottomBarButtons';
import {Colors, Sizes, TabNames} from '../../utils/AppConstants';
import EmptyScreen from '../../ui/screens/EmptyScreen';
import HomeScreen from '../../ui/screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={TabNames.HOME}
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: 44,
        },

        // tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: Colors.grayscale[100],
          height: Sizes.tabs.height,
          backgroundColor: Colors.bottomBar,
        },
      })}>
      <Tab.Screen
        name={TabNames.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            //marginLeft: Platform.isPad ? '5%' : 0,
            height: 44,
          },
          tabBarIcon: ({focused}) => (
            <TabButton
              type={TabNames.HOME}
              name={TabNames.HOME}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNames.DISCOVER}
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            //marginLeft: Platform.isPad ? '5%' : 0,
            height: 44,
          },
          tabBarIcon: ({focused}) => (
            <TabButton
              type={TabNames.DISCOVER}
              name={TabNames.DISCOVER}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNames.ACTIVITY}
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            //marginLeft: Platform.isPad ? '5%' : 0,
            height: 44,
          },
          tabBarIcon: ({focused}) => (
            <TabButton
              type={TabNames.ACTIVITY}
              name={TabNames.ACTIVITY}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNames.BOOKMARKS}
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            //marginLeft: Platform.isPad ? '5%' : 0,
            height: 44,
          },
          tabBarIcon: ({focused}) => (
            <TabButton
              type={TabNames.BOOKMARKS}
              name={TabNames.BOOKMARKS}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNames.PROFILE}
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            //marginLeft: Platform.isPad ? '5%' : 0,
            height: 44,
          },
          tabBarIcon: ({focused}) => (
            <TabButton
              type={TabNames.PROFILE}
              name={TabNames.PROFILE}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
