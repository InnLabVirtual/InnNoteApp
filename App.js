/* eslint-disable */ 
import React from 'react'

import {
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
import Project from './src/containers/Project/Project'
import Activity from './src/containers/Activity/Activity'
import RegisText from './src/containers/RegisInfo/RegisText/RegisText'
/* eslint-enable */

const App = () => {
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
