/* eslint-disable */ 
import React, {Fragment, useEffect} from 'react';

import {
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import SplashScreen from 'react-native-splash-screen';

import Project from './src/containers/Project/Project'
import Activity from './src/containers/Activity/Activity'
import RegisText from './src/containers/RegisInfo/RegisText/RegisText'

/* eslint-enable */

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <RegisText />
      </ScrollView>
    </>
  )
}

export default App
