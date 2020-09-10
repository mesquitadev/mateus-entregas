import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import NetworkObserver from './Components/NetworkObserver/NetworkObserver';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <NetworkObserver />
      <StatusBar backgroundColor="#0095DA" />
      <Routes />
    </NavigationContainer>
  );
}