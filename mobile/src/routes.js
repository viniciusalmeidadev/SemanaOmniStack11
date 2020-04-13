import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuFooter from './component/Menu-Footer';   

export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Detail" component={Detail}/>
                <AppStack.Screen name="MenuFooter" component={MenuFooter}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}