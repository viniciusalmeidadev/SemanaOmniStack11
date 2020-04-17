import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const AppStack = createStackNavigator();
 



import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardRoutes from './routes/dashboard.routes';


export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator  screenOptions={{ headerShown: false }}>
              
                
                <AppStack.Screen name="Incidents" component={DashboardRoutes}/>
                <AppStack.Screen name="Detail" component={Detail}/>
                <AppStack.Screen name="Login" component={Login}/>
                 
                <AppStack.Screen name="Register" component={Register}/>

             
            </AppStack.Navigator>


        </NavigationContainer>
    );
}