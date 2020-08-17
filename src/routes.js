import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Views/Login/Login';
import BottomTabNavigator from './Components/BottomTabNavigator/BottomTabNavigator';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>

    <Stack.Screen
      name="Acesse a sua conta"
      component={Login}
    />
    
    {/* <Stack.Screen 
      name="Pedidos" 
      component={BottomTabNavigator} 
      options={{
        headerShown: false,
      }}
    /> */}
  </Stack.Navigator>
);

export default Routes;