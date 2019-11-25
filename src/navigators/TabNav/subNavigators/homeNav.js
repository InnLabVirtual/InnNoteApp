
import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';

import Projects from '../../../containers/Projects/Projects';


export default createStackNavigator (
    {
        Projects: { screen: Projects }
    },
    {
        initialRouteName: 'Projects',
        headerMode: 'none'
    }
);
