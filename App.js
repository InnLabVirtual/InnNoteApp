/* eslint-disable */ 
import React, {Fragment, useEffect} from 'react';

import {
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from 'react-native-splash-screen';

import Project from './src/containers/Project/Project'
import Activity from './src/containers/Activity/Activity'
import RegisText from './src/containers/RegisInfo/RegisText/RegisText'

/* eslint-enable */

const AppNavigator = createStackNavigator (
    {
        Project: { screen: Project },
	Activity: { screen: Activity },
	RegisText: { screen: RegisText }
    },
    {
        initialRouteName: 'Project'
    }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppContainer />
      
    </>
  )
}

export default App
