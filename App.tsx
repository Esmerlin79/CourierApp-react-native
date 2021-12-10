import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigator/AppNavigator';
import AuthProvider from './src/context/AuthContext';

const App = () => {

  const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
      <AuthProvider>
        { children }
      </AuthProvider>
    )
  }

  return (
    <NavigationContainer>
      <AppState>
        <AppNavigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App
