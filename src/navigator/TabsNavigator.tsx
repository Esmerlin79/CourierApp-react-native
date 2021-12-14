import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import OfficeScreen from '../screen/OfficeScreen';
import { Platform } from 'react-native';
import PackagesNavigator from './PackagesNavigator';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:'#5D84A2',
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: Platform.OS === 'android' ? 15 : 0,
        },
        tabBarStyle: {
          backgroundColor: 'white',
          height: Platform.OS === 'android' ? 78 : 98,
        }
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen 
          name="PackagesNavigator" 
          component={PackagesNavigator} 
          options={{
            tabBarLabel:"Paquetes",
            tabBarIcon: ({ color, size}) => <Icon name="cube-outline" size={35} color={color} />
          }}
        />
        
      <Tab.Screen 
          name="OfficeScreen" 
          component={OfficeScreen} 
          options={{
            tabBarLabel: "Oficinas",
            tabBarIcon: ({ color, size }) => <Icon name="star" size={35} color={color} />
          }}
      />

      <Tab.Screen 
          name="preferencias" 
          component={OfficeScreen} 
          options={{
            tabBarLabel: "Preferencias",
            tabBarIcon: ({ color, size }) => <Icon name="star" size={35} color={color} />
          }}
      />

    </Tab.Navigator>
  );
}

export default HomeNavigator;