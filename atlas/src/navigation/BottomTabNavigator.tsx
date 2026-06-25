import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ShipmentScreen from '../screens/shipments/ShipmentScreen';
import CustomerScreen from '../screens/customers/CustomerScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0A6EBD',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#0A6EBD',
        tabBarInactiveTintColor: '#888',
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
<Image
  source={require('../assets/icons/home.png')}
  style={{
    width: 24,
    height: 24,
    resizeMode: 'contain',
  }}
/>
          ),
        }}
      />

      <Tab.Screen
        name="Shipments"
        component={ShipmentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/shipment.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#0A6EBD' : '#888',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Customers"
        component={CustomerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/customer.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#0A6EBD' : '#888',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/profile.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#0A6EBD' : '#888',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}