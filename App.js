import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import MainContainer from './src/containers/MainContainer.js';

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen
            name="MainContainer"
            component={MainContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
