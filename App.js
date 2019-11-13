/* eslint-disable */ 
import React, {Fragment, useEffect} from 'react';

import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import SplashScreen from 'react-native-splash-screen';

import { AppContainer } from './src/navigators/mainNavigator';
/* eslint-enable */


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
