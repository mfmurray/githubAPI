import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import MainContainer from './src/containers/MainContainer.js';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >

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

    </PersistGate>
  </Provider>
  );
};
