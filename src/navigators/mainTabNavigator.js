
/* eslint-disable */
import React, { useState } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'

import { createBottomTabNavigator } from 'react-navigation-tabs';

import theme from '../styles/theme.style'
import common from '../styles/common.style'
import Projects from '../containers/Projects/Projects';
import Settings from '../containers/Settings/Settings';
import TabIconComponent from '../components/common/TabIconComponent/TabIconComponent';

export default createBottomTabNavigator(
  {
    Projects: Projects,
    Settings: Settings
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent;

        if (routeName === 'Projects') {
          IconComponent = (<TabIconComponent label='Projects' tintColor={tintColor} />)
        } else if (routeName === 'Settings') {
          IconComponent = (<TabIconComponent label='Settings' tintColor={tintColor} />)
        }

        return IconComponent
      }
    }),
    tabBarOptions: {
      activeTintColor: theme.PRIMARY_COLOR,
      inactiveTintColor: theme.LIGHTGRAY_COLOR,
      showLabel: false,
      style: common.tabNavBar,
      keyboardHidesTabBar: true
    }
  }
);
