import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from '../containers/Loading/Loading';

import AuthNavigator from './authNavigator'
import projectNavigator from './projectNavigator';


const RootStack = createStackNavigator(
  {
    ProjectNav: { 
      screen: projectNavigator 
    },
    Loading: {
      screen: Loading
    },
    AuthNav: {
      screen: AuthNavigator
    }
  },
  {
    initialRouteName: 'Loading',
    mode: 'modal',
    headerMode: 'none'
  }
);

export const AppContainer = createAppContainer(RootStack);
