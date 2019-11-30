
import React from 'react'

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

import Project from '../../../containers/Project/Project';
import Activity from '../../../containers/Activity/Activity';
import Recordings from '../../../containers/Recordings/Recordings';

import theme from '../../../styles/theme.style';
import common from '../../../styles/common.style';

export default createStackNavigator (
    {
        Project: { screen: Project },
        Activity: { screen: Activity },
        RegisText: { screen: Recordings }
    },
    {
        initialRouteName: 'Project',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: theme.BLACK_COLOR,
            headerTitleStyle: {
              ...common.txt,
              ...common.title,
              ...common.highTxt,
              fontSize: theme.FONT_SIZE_MEDIUM
            },
            headerRight: () => (
              <TouchableNativeFeedback
                onPress={() => alert('This is a but!')}
              >
                <View style={[common.icon, { marginRight: 10 }]}>
                <Image 
                  source={require('./../../../assets/icons/header/more.png')}
                />  
                </View>  
              </TouchableNativeFeedback>
            ),
            headerBackImage: 
              <View style= {{
                ...common.icon,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              
                <Image 
                  source={require('./../../../assets/icons/header/back.png')}
                />  
              </View>
          }
    }
);
