
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

import theme from '../../styles/theme.style'
import common from '../../styles/common.style'

import Project from '../../containers/Project/Project';
import Recordings from '../../containers/Recordings/Recordings';
import Notifications from '../../containers/Notifications/Notifications';
import Settings from '../../containers/Settings/Settings';

import ProjectsNav from './subNavigators/homeNav'
import ProjectNav from './subNavigators/ProjectNav';


import TabIconComponent from '../../components/common/TabIcons/TabIconComponent/TabIconComponent';
import MainIconComponent from '../../components/common/TabIcons/MainIconComponent/MainIconComponent';


export default createBottomTabNavigator(
  {
    Projects: ProjectsNav,
    Project: ProjectNav,
    Recording: Recordings,
    Notifications: Notifications,
    Settings: Settings,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent;

        const homeIcon = "M7.36084 12.5L14.8625 4.99834L22.3642 12.5H22.3625V25H7.36252V12.5H7.36084ZM4.86252 14.9983L3.0165 16.8443L1.25 15.0778L13.0962 3.23161C14.0717 2.25613 15.6533 2.25613 16.6288 3.23161L28.475 15.0778L26.7085 16.8443L24.8625 14.9984V25C24.8625 26.3807 23.7432 27.5 22.3625 27.5H7.36252C5.98181 27.5 4.86252 26.3807 4.86252 25V14.9983Z";
        const projectIcon = "M16.4457 2.8503L26.5097 8.44138C27.8301 9.17496 27.8301 10.825 26.5097 11.5586L24.8152 12.5L26.5097 13.4414C27.8301 14.175 27.8301 15.8251 26.5097 16.5586L24.8152 17.5L26.5097 18.4414C27.8301 19.175 27.8301 20.8251 26.5097 21.5586L16.4457 27.1497C15.605 27.6168 14.395 27.6168 13.5543 27.1497L3.49033 21.5586C2.16989 20.8251 2.16989 19.175 3.49033 18.4414L5.18481 17.5L3.49033 16.5586C2.16989 15.8251 2.16989 14.175 3.49033 13.4414L5.18482 12.5L3.49033 11.5586C2.16989 10.825 2.16989 9.17496 3.49033 8.44138L13.5543 2.8503C14.395 2.38323 15.605 2.38323 16.4457 2.8503ZM16.4457 17.1497L22.2413 13.93L24.1674 15L22.2413 16.0701L19.6674 17.5L15.2316 19.9643C15.146 20.0119 14.854 20.0119 14.7684 19.9643L10.3326 17.5L7.75872 16.0701L5.83263 15L7.75873 13.93L13.5543 17.1497C14.395 17.6168 15.605 17.6168 16.4457 17.1497ZM7.75872 18.93L5.83263 20L14.7684 24.9643C14.854 25.0119 15.146 25.0119 15.2316 24.9643L24.1674 20L22.2413 18.93L16.4457 22.1497C15.605 22.6168 14.395 22.6168 13.5543 22.1497L7.75872 18.93ZM14.7684 5.03569C14.854 4.9881 15.146 4.9881 15.2316 5.03569L24.1674 10L15.2316 14.9643C15.146 15.0119 14.854 15.0119 14.7684 14.9643L5.83263 10L14.7684 5.03569Z";
        const notifIcon = "M23.75 12.5C23.75 7.42603 20.952 3.90438 17.3317 2.84714C17.2006 2.50795 16.9935 2.19263 16.7119 1.92804C15.7497 1.02399 14.2503 1.02399 13.2881 1.92804C13.0072 2.19204 12.8003 2.50657 12.6691 2.84491C9.04419 3.89754 6.25 7.41149 6.25 12.5C6.25 15.7924 5.58623 17.6372 4.35745 18.9742C4.152 19.1977 3.59537 19.7098 3.21832 20.0566C3.03993 20.2207 2.90174 20.3478 2.85996 20.3899L2.5 20.755V25.0176H10.11C10.3673 26.3452 11.0876 27.2333 12.3902 28.0283C13.9927 29.0061 16.0073 29.0061 17.6098 28.0283C18.7594 27.3267 19.5302 26.2486 19.8429 25.0176H27.5V20.755L27.14 20.3899C27.1021 20.3515 26.9696 20.2292 26.7963 20.0694L26.7963 20.0693L26.7962 20.0693C26.4203 19.7225 25.8528 19.199 25.6442 18.9712C24.4146 17.628 23.75 15.7808 23.75 12.5ZM17.1709 25.0176H12.7233C12.8999 25.3461 13.2009 25.5942 13.6925 25.8942C14.4953 26.3841 15.5047 26.3841 16.3075 25.8942C16.6792 25.6674 16.9697 25.3672 17.1709 25.0176ZM23.8002 20.6593C24.0632 20.9466 24.627 21.4718 25 21.8149V22.5176H5V21.8155C5.37009 21.4764 5.93554 20.9516 6.19811 20.6659C7.86777 18.8493 8.75 16.3973 8.75 12.5C8.75 7.77487 11.666 5.01548 15 5.01548C18.3246 5.01548 21.25 7.78911 21.25 12.5C21.25 16.3847 22.1325 18.8375 23.8002 20.6593Z";
        const settingsIcon = "M15 28.75C7.40608 28.75 1.25 22.5939 1.25 15C1.25 7.40608 7.40608 1.25 15 1.25C22.5939 1.25 28.75 7.40608 28.75 15C28.75 22.5939 22.5939 28.75 15 28.75ZM24.2494 21.4058C25.5108 19.5879 26.25 17.3803 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 17.3803 4.48923 19.5879 5.75063 21.4058C7.15744 19.5476 10.4633 18.75 15 18.75C19.5367 18.75 22.8426 19.5476 24.2494 21.4058ZM22.4559 23.4247C22.09 22.1092 19.4617 21.25 15 21.25C10.5383 21.25 7.91001 22.1092 7.54415 23.4247C9.52913 25.1827 12.1399 26.25 15 26.25C17.8601 26.25 20.4709 25.1827 22.4559 23.4247ZM15 7.5C11.9739 7.5 10 9.6947 10 12.5C10 16.7842 12.2011 18.75 15 18.75C17.7726 18.75 20 16.8495 20 12.75C20 9.90197 18.0177 7.5 15 7.5ZM12.5 12.5C12.5 15.3366 13.5228 16.25 15 16.25C16.4721 16.25 17.5 15.373 17.5 12.75C17.5 11.188 16.5196 10 15 10C13.4172 10 12.5 11.0198 12.5 12.5Z"
      

        if (routeName === 'Projects') {
          IconComponent = (<TabIconComponent label={homeIcon} tintColor={tintColor} />)
        } else if (routeName === 'Project') {
          IconComponent = (<TabIconComponent label={projectIcon} tintColor={tintColor} />)
        } else if (routeName === 'Recording') {
          IconComponent = (<MainIconComponent isActive={true} />)
        } else if (routeName === 'Notifications') {
          IconComponent = (<TabIconComponent label={notifIcon} tintColor={tintColor} />)
        }
        else if (routeName === 'Settings') {
          IconComponent = (<TabIconComponent label={settingsIcon} tintColor={tintColor} />)
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
