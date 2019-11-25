
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

import { createStackNavigator } from 'react-navigation-stack';

import theme from '../styles/theme.style'
import global from '../styles/common.style'

import Project from '../containers/Project/Project';
import RegisText from '../containers/RegisInfo/RegisText/RegisText';
import Activity from '../containers/Activity/Activity';

export default createStackNavigator (
    {
        Project: { screen: Project },
        Activity: { screen: Activity },
        RegisText: { screen: RegisText }
    },
    {
        initialRouteName: 'Project',
        
    }
);
