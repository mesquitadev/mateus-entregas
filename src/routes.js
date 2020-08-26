import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Views/Colaborador/Login/Login';
import BottomTabNavigator from './Components/BottomTabNavigator/BottomTabNavigator';
import OrderDetails from './Views/Colaborador/OrderDetails/OrderDetails';
import SelectedItems from './Views/Colaborador/SelectedItems/SelectedItems';
import SelectDeliveryPerson from './Views/Colaborador/SelectDeliveryPerson/SelectDeliveryPerson';
import DeliveryInformation from './Views/Colaborador/DeliveryInformation/DeliveryInformation';
import OrderCheck from './Views/Colaborador/OrderCheck/OrderCheck';

// import DeliverymanRegister from './Views/Entregador/DeliverymanRegister/DeliverymanRegister';
import AcceptOrders from './Views/Entregador/AcceptOrders/AcceptOrders';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: "Acesse a sua conta"
      }}
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
        title: "Detalhes do pedido",
        headerBackTitle: "Voltar",
      }}
    />
    <Stack.Screen 
      name="SelectedItems"
      component={SelectedItems}
      options={{
        title: "Pedidos selecionados",
        headerBackTitle: "Voltar",
      }}
    />
    <Stack.Screen 
      name="SelectDeliveryPerson"
      component={SelectDeliveryPerson}
      options={{
        title: "Selecionar entregador",
        headerBackTitle: "Voltar",
      }}
    />
    <Stack.Screen 
      name="DeliveryInformation"
      component={DeliveryInformation}
      options={{
        title: "Entregador",
        headerBackTitle: "Voltar",
      }}
    />
    <Stack.Screen 
      name="OrderCheck"
      component={OrderCheck}
      options={{
        title: "Conferência de pedido",
        headerBackTitle: "Voltar",
      }}
    />

    {/* Rotas do Entregador */}

    {/* <Stack.Screen 
      name="DeliverymanRegister"
      component={DeliverymanRegister}
      options={{
        title: "Cadastrar entregador",
        headerBackTitle: "Voltar",
      }}
    /> */}
    <Stack.Screen 
      name="AcceptOrders"
      component={AcceptOrders}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
 
export default Routes;