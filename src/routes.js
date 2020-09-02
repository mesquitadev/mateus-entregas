import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Views/Colaborador/Login/Login';
import BottomTabNavigator from './Components/BottomTabNavigator/BottomTabNavigator';
import OrderDetails from './Views/Colaborador/OrderDetails/OrderDetails';
import SelectedItems from './Views/Colaborador/SelectedItems/SelectedItems';
import SelectDeliveryPerson from './Views/Colaborador/SelectDeliveryPerson/SelectDeliveryPerson';
import DeliveryInformation from './Views/Colaborador/DeliveryInformation/DeliveryInformation';
import OrderCheck from './Views/Colaborador/OrderCheck/OrderCheck';
import GenerateQrCode from './Views/Colaborador/GenerateQrCode/GenerateQrCode';

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
import StartDelivery from './Views/Entregador/StartDelivery/StartDelivery';
import DeliveryReceipt from './Views/Entregador/DeliveryReceipt/DeliveryReceipt';
import ReceiptByAnotherPerson from './Views/Entregador/ReceiptByAnotherPerson/ReceiptByAnotherPerson';
import DeliverymanRegisterDenied from './Views/Entregador/DeliverymanRegisterDenied/DeliverymanRegisterDenied';
import OrderConfirmed from './Views/Colaborador/OrderConfirmed/OrderConfirmed';
import DeliveryInProgress from './Views/Entregador/DeliveryInProgress/DeliveryInProgress';
import ReceiptByQrCode from './Views/Entregador/ReceiptByQrcode/ReceiptByQrCode';
import DeliveryReceiptSuccess from './Views/Entregador/DeliveryReceiptSuccess/DeliveryReceiptSuccess';
import Preloader from './Views/Colaborador/Preloader/Preloader';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Preloader">

    <Stack.Screen
      name="Preloader"
      component={Preloader}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Acesse a sua conta',
        headerTitleAlign: 'center',
        headerShown: false
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
    <Stack.Screen
      name="OrderConfirmed"
      component={OrderConfirmed}
      options={{
        title: 'Pedido Retirado',
        headerShown: false
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
        headerShown: false
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
        headerTitleAlign: 'center'
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
       headerTitleAlign: 'center',
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
    <Stack.Screen 
      name="ReceiptByAnotherPerson"
      component={ReceiptByAnotherPerson}
      options={{
        title: "Recebimento terceiros"
      }}
    />
    <Stack.Screen
      name="DeliverymanRegisterDenied"
      component={DeliverymanRegisterDenied}
      options={{
        title: "Cadastro",
        headerBackTitle: "Voltar",
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="DeliveryInProgress"
      component={DeliveryInProgress}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ReceiptByQrCode"
      component={ReceiptByQrCode}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="DeliveryReceiptSuccess"
      component={DeliveryReceiptSuccess}
      options={{
        headerShown: false,
      }}
    />

  </Stack.Navigator>
);
export default Routes;
