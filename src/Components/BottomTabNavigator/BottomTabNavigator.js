import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OrderList from '../../Views/Colaborador/OrderList/OrderList';
import Reports from '../../Views/Colaborador/Reports/Reports';
import Profile from '../../Views/Colaborador/Profile/Profile';

Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Pedidos') {
          iconName = focused ? 'md-documents' : 'md-documents-outline';
        } else if (route.name === 'Relatórios') {
          iconName = focused ? 'reader-sharp' : 'reader-outline';
        } else {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      activeTintColor: '#0070A3',
      inactiveTintColor: '#787B7D',
    }}
  >
    <Tab.Screen name="Pedidos" component={OrderList} />
    <Tab.Screen name="Relatórios" component={Reports} />
    <Tab.Screen name="Perfil" component={Profile} />
  </Tab.Navigator>
);

export default BottomTabNavigator;