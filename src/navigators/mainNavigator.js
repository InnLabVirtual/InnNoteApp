import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from '../containers/Loading/Loading';

import AuthNavigator from './authNavigator'
import projectNavigator from './projectNavigator';
import mainTabNavigator from './mainTabNavigator';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Projects from '../containers/Projects/Projects';
import Settings from '../containers/Settings/Settings';
import setupNavigator from './setupNavigator';



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
    },
    MainTabNav: {
      screen: mainTabNavigator
    },
    SetupNav: {
      screen: setupNavigator
    }
  },
  {
    initialRouteName: 'Loading',
    mode: 'modal',
    headerMode: 'none'
  }
);

export const AppContainer = createAppContainer(RootStack);
