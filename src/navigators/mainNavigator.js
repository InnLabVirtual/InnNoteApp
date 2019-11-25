import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from '../containers/Loading/Loading';

import AuthNavigator from './authNavigator'
import mainTabNavigator from './TabNav/mainTabNavigator';

import setupNavigator from './setupNavigator';



const RootStack = createStackNavigator(
  {
    Loading: {
      screen: Loading
    },
    AuthNav: {
      screen: AuthNavigator
    },
    SetupNav: {
      screen: setupNavigator
    },
    MainTabNav: {
      screen: mainTabNavigator
    }
  },
  {
    initialRouteName: 'Loading',
    mode: 'modal',
    headerMode: 'none'
  }
);

export const AppContainer = createAppContainer(RootStack);
