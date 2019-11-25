
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
              ...global.txt,
              ...global.title,
              ...global.highTxt,
              fontSize: theme.FONT_SIZE_MEDIUM
            },
            headerRight: () => (
              <TouchableNativeFeedback
                onPress={() => alert('This is a but!')}
              >
                <View style={[global.icon, { marginRight: 10 }]}>
                <Image 
                  source={require('./../../../assets/icons/header/more.png')}
                />  
                </View>  
              </TouchableNativeFeedback>
            ),
            headerBackImage: 
              <View style= {{
                ...global.icon,
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
