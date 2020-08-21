import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Views/Login/Login';
import BottomTabNavigator from './Components/BottomTabNavigator/BottomTabNavigator';
import OrderDetails from './Views/OrderDetails/OrderDetails';
import SelectedItems from './Views/SelectedItems/SelectedItems';
import SelectDeliveryPerson from './Views/SelectDeliveryPerson/SelectDeliveryPerson';
import DeliveryInformation from './Views/DeliveryInformation/DeliveryInformation';

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
      name="SelectedItems"
      component={SelectedItems}
      options={{
        title: "Pedidos selecionados"
      }}
    />
    <Stack.Screen 
      name="SelectDeliveryPerson"
      component={SelectDeliveryPerson}
      options={{
        title: "Selecionar entregador"
      }}
    />
    <Stack.Screen 
      name="DeliveryInformation"
      component={DeliveryInformation}
      options={{
        title: "Entregador"
      }}
    />
  </Stack.Navigator>
);

export default Routes;