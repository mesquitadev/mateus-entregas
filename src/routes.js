import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Views/Colaborador/Login/Login';
import BottomTabNavigator from './Components/BottomTabNavigator/BottomTabNavigator';
import OrderDetails from './Views/Colaborador/OrderDetails/OrderDetails';
import SelectedItems from './Views/Colaborador/SelectedItems/SelectedItems';
import SelectDeliveryPerson from './Views/Colaborador/SelectDeliveryPerson/SelectDeliveryPerson';
import DeliveryInformation from './Views/Colaborador/DeliveryInformation/DeliveryInformation';
import OrderCheck from './Views/Colaborador/OrderCheck/OrderCheck';
import DeliverymanRegister from './Views/Entregador/DeliverymanRegister/DeliverymanRegister';
import DeliverymanPhotos from './Views/Entregador/DeliverymanPhotos/DeliverymanPhotos';
import DeclineOrders from './Views/Entregador/DeclineOrders/DeclineOrders';
import DeclineOrdersInformation from './Views/Entregador/DeclineOrdersInformation/DeclineOrdersInformation';
import AcceptOrders from './Views/Entregador/AcceptOrders/AcceptOrders';
import ScanDeliveryCode from './Views/Entregador/ScanDeliveryCode/ScanDeliveryCode';
import DeliverymanPhotoCnh from './Views/Entregador/DeliverymanPhotoCnh/DeliverymanPhotoCnh';
import DeliverymanPhotoProfile from './Views/Entregador/DeliverymanPhotoProfile/DeliverymanPhotoProfile';
import DeliverymanSetPassword from './Views/Entregador/DeliverymanSetPassword/DeliverymanSetPassword';
import DeliverymanSetRegister from './Views/Entregador/DeliverymanSetRegister/DeliverymanSetRegister';
import EnterDeliverymanCode from './Views/Entregador/EnterDeliverymanCode/EnterDeliverymanCode';
import ReceiveOrder from './Views/Entregador/ReceiveOrder/ReceiveOrder';
import DeliverymanPhotoValidation from './Views/Entregador/DeliverymanPhotoValidation/DeliverymanPhotoValidation';
import DeliveryOrders from './Views/Entregador/DeliveryOrders/DeliveryOrders';
import GenerateQrCode from './Views/Colaborador/GenerateQrCode/GenerateQrCode';
import StartDelivery from './Views/Entregador/StartDelivery/StartDelivery';
import DeliveryReceipt from './Views/Entregador/DeliveryReceipt/DeliveryReceipt';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Login">

    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Acesse a sua conta',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="OrderList"
      component={BottomTabNavigator}
      options={{
        title: 'Pedidos',
        headerShown: false,
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="OrderDetails"
      component={OrderDetails}
      options={{
        title: 'Detalhes do pedido',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="SelectedItems"
      component={SelectedItems}
      options={{
        title: 'Pedidos selecionados',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="SelectDeliveryPerson"
      component={SelectDeliveryPerson}
      options={{
        title: 'Selecionar entregador',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="DeliveryInformation"
      component={DeliveryInformation}
      options={{
        title: 'Entregador',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="OrderCheck"
      component={OrderCheck}
      options={{
        title: 'Conferência de pedido',
        headerBackTitle: 'Voltar',
      }}
    />

    {/* Rotas do Entregador */}

    <Stack.Screen
      name="DeliverymanRegister"
      component={DeliverymanRegister}
      options={{
        title: 'Digite seus dados pessoais',
        headerBackTitle: 'Voltar',
      }}
    />

    <Stack.Screen
      name="DeliverymanPhotos"
      component={DeliverymanPhotos}
      options={{
        title: 'Conclua as etapas a seguir',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="AcceptOrders"
      component={AcceptOrders}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ScanDeliveryCode"
      component={ScanDeliveryCode}
      options={{
        title: 'Escanear QR code',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="DeclineOrders"
      component={DeclineOrders}
      options={{
        title: 'Motivo',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="DeclineOrdersInformation"
      component={DeclineOrdersInformation}
      options={{
        title: 'Entrega cancelada',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
      }}
    />
    <Stack.Screen
      name="DeliverymanPhotoCnh"
      component={DeliverymanPhotoCnh}
      options={{
        title: '',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="DeliverymanPhotoProfile"
      component={DeliverymanPhotoProfile}
      options={{
        title: '',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="ReceiveOrder"
      component={ReceiveOrder}
      options={{
        title: 'Receber pedido',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="DeliverymanSetPassword"
      component={DeliverymanSetPassword}
      options={{
        title: 'Defina sua senha',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="DeliverymanSetRegister"
      component={DeliverymanSetRegister}
      options={{
        title: 'Cadastro',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="EnterDeliverymanCode"
      component={EnterDeliverymanCode}
      options={{
        title: 'Digite o código do entregador',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
      name="DeliverymanPhotoValidation"
      component={DeliverymanPhotoValidation}
      options={{
        title: '',
        headerBackTitle: 'Voltar',
      }}
    />
    <Stack.Screen
     name="DeliveryOrders"
     component={DeliveryOrders}
     options={{
       headerShown: false
      }}
    />
    <Stack.Screen
     name="GenerateQrCode"
     component={GenerateQrCode}
     options={{
       title: "Confirmação",
       headerBackTitle: "Voltar",
      }}
    />
    <Stack.Screen
     name="StartDelivery"
     component={StartDelivery}
     options={{
       title: "Iniciar entrega",
       headerBackTitle: "Voltar",
      }}
    />
    <Stack.Screen 
     name="DeliveryReceipt"
     component={DeliveryReceipt}
     options={{
       title: "Comprovante de entrega",
       headerBackTitle: "Voltar",
       headerTitleAlign: 'center',
      }}
    />

  </Stack.Navigator>
);
export default Routes;
