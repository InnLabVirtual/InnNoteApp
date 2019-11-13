import React from 'react'

import {
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableNativeFeedback,
    Image
} from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import theme from './../styles/theme.style'
import global from './../styles/common.style'

import Project from '../containers/Project/Project';
import Activity from '../containers/Activity/Activity';
import RegisText from '../containers/RegisInfo/RegisText/RegisText';


const AppNavigator = createStackNavigator (
    {
        Project: { screen: Project },
	Activity: { screen: Activity },
	RegisText: { screen: RegisText }
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
                source={require('./../assets/icons/header/more.png')}
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
                source={require('./../assets/icons/header/back.png')}
              />  
            </View>
        }
    }
);

export const AppContainer = createAppContainer(AppNavigator);
