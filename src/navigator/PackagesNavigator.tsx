import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PackageDetailsScreen from '../screen/PackageDetailsScreen';
import PackagesScreen from '../screen/PackagesScreen';
import { PackagesDetailsParams } from '../interfaces/appInterfaces';


export type RootPackagesNavigatorParams = {
  PackagesScreen: undefined;
  PackageDetailsScreen: PackagesDetailsParams;
}

const Stack = createStackNavigator<RootPackagesNavigatorParams>();

const PackagesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        },
      }}
    >
      <Stack.Screen name="PackagesScreen" component={PackagesScreen} />
      <Stack.Screen name="PackageDetailsScreen" component={PackageDetailsScreen} />
    </Stack.Navigator>
  );
}

export default PackagesNavigator;