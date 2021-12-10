import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PackagesScreen from '../screen/PackagesScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PackagesScreen" component={PackagesScreen} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;