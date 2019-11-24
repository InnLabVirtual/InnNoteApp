
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

import PersonalData from '../containers/Setup/PersonalData/PersonalData';

export default createStackNavigator (
    {
        PersonalData: { screen: PersonalData },
    },
    {
        initialRouteName: 'PersonalData',
        headerMode: 'none'

    }
);
