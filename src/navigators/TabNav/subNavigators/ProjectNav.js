
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


import Svg, {
  G,
  Path,
} from 'react-native-svg';

import { createStackNavigator } from 'react-navigation-stack';

import Project from '../../../containers/Project/Project';
import Activity from '../../../containers/Activity/Activity';
import Recordings from '../../../containers/Recordings/Recordings';

import theme from '../../../styles/theme.style';
import common from '../../../styles/common.style';

export default createStackNavigator(
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
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.DARKGRAY_COLOR
      },
      headerRight: () => (
        <TouchableNativeFeedback
          onPress={() => alert('This is a but!')}
        >
          <View style={[common.icon, { marginRight: 10 }]}>

            <Svg
              width='24'
              height='24'
              viewBox="0 0 24 24"
            >
              <Path
                d="M21 5C22.1046 5 23 5.89543 23 7V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3H9C10.12 3 10.8329 3.47545 11.549 4.37885C11.5688 4.40385 11.6171 4.46608 11.6706 4.535L11.6707 4.53515C11.7461 4.63236 11.8318 4.74283 11.8625 4.78082C11.8935 4.81925 11.9196 4.85103 11.9412 4.8773L11.9412 4.87732C12.0292 4.98428 12.0419 4.99978 12.0018 5H21ZM21 9V7L11.9946 6.99999C11.2765 6.99614 10.8087 6.65991 10.3058 6.03654C10.2603 5.98006 10.1496 5.83737 10.0692 5.73376L10.0692 5.73375L10.0691 5.73357C10.0271 5.67944 9.99336 5.636 9.9816 5.62116C9.60702 5.14857 9.38424 5 9 5H3V9H21ZM21 11H3V19H21V11Z" fill='none'
                fill={theme.MEDIUMGRAY_COLOR}
              >
              </Path>

            </Svg>


          </View>
        </TouchableNativeFeedback>
      ),
      headerBackImage:
        <View style={{
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
