
import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';

import Projects from '../../../containers/Projects/Projects';
import Modals from '../../../components/common/Modals/Modals';


export default createStackNavigator (
    {
        Projects: { screen: Projects },
        AddTeamModal: { 
            screen: Modals,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Projects',
        headerMode: 'none',
        transparentCard: true,
        cardStyle: {
            backgroundColor: 'rgba(234, 91, 121, .3)',
            opacity: 1
        }
    }
);
