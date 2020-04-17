import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Incidents from  '../pages/Incidents';
import Recharge from '../pages/Recharge';
import Extract from '../pages/Extract';
import Settings from '../pages/Settings';
import Donations from '../pages/Donations';

export default function DashboardRoutes(){
    return(
        <Tab.Navigator 

            tabBarOptions={{
                activeTintColor:'black',
                inactiveTintColor:'#e02141',
                inactiveBackgroundColor:'#ecf1f5',
                activeBackgroundColor:'#ecf1f8'
            }
            }

            screenOptions={({route})=>({
                tabBarIcon:({color,size})=>{
                    let iconName;
                   
                        if(route.name === 'Incidents'){
                        iconName = 'heart'
                        }else if(route.name === 'Recharge'){
                        iconName = 'dollar-sign'
                        }else if (route.name === 'Settings'){
                            iconName = 'settings'
                        }else if (route.name === 'Extract'){
                            iconName = 'file-text'
                        }else if( route.name === 'Donations'){
                            iconName = 'file-text'
                        }

                return <Feather name={iconName} size={size} color={color}/>
            }
        })}>
            <Tab.Screen name="Incidents" component={Incidents}/>
            <Tab.Screen name="Recharge" component={Recharge}/>
            <Tab.Screen name="Extract" component={Extract}/>
            <Tab.Screen name="Donations" component={Donations}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}