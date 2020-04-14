import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Recharge from './pages/Recharge';


const myTabNavigator = createBottomTabNavigator(

    {
        Incidents,
        Detail,
        Recharge

    },
    {

        tabBarOptions:{
            activeTintColor: 'black',
            inactiveTintColor: '#e02141',
            style:{
                backgroundColor: '#fff'
            },
            showLabel: false
        },
        defaultOptions

    }

)

export default myTabNavigator;