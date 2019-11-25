
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
import Project from '../containers/Project/Project';
import Settings from '../containers/Settings/Settings';
import TabIconComponent from '../components/common/TabIcons/TabIconComponent/TabIconComponent';
import MainIconComponent from '../components/common/TabIcons/MainIconComponent/MainIconComponent';
import Recordings from '../containers/Recordings/Recordings';
import Notifications from '../containers/Notifications/Notifications';

export default createBottomTabNavigator(
  {
    Projects: Projects,
    Project: Project,
    Recording: Recordings,
    Notifications: Notifications,
    Settings: Settings,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent;

        if (routeName === 'Projects') {
          IconComponent = (<TabIconComponent label='Projects' tintColor={tintColor} />)
        } else if (routeName === 'Project') {
          IconComponent = (<TabIconComponent label='Project' tintColor={tintColor} />)
        } else if (routeName === 'Recording') {
          IconComponent = (<MainIconComponent isActive={true} />)
        } else if (routeName === 'Notifications') {
          IconComponent = (<TabIconComponent label='Notifications' tintColor={tintColor} />)
        }
        else if (routeName === 'Settings') {
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
