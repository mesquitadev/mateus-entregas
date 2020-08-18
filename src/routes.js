import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Views/Login/Login';
import BottomTabNavigator from './Components/BottomTabNavigator/BottomTabNavigator';
import OrderDetails from './Views/OrderDetails/OrderDetails';
import SelectedOrders from './Views/SelectedOrders/SelectedOrders';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="OrderList">
    <Stack.Screen
      name="Acesse a sua conta"
      component={Login}
    />
    <Stack.Screen 
      name="OrderList" 
      component={BottomTabNavigator} 
      options={{
        title: "Pedidos",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="OrderDetails"
      component={OrderDetails}
      options={{
        title: "Detalhes do pedido"
      }}
    />
    <Stack.Screen 
      name="SelectedOrders"
      component={SelectedOrders}
      options={{
        title: "Pedidos selecionados"
      }}
    />
  </Stack.Navigator>
);

export default Routes;