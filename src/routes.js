import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrderList from './Views/OrderList/OrderList';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={OrderList} />
  </Stack.Navigator>
);

export default Routes;