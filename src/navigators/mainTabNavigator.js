
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
import global from '../styles/common.style'
import Projects from '../containers/Projects/Projects';
import Settings from '../containers/Settings/Settings';

export default createBottomTabNavigator({
    Projects: Projects,
    Settings: Settings
    
});
