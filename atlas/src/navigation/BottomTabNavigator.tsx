import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from '../assets/icons/home.svg';
import PostsIcon from '../assets/icons/posts.svg';
import CustomersIcon from '../assets/icons/customers.svg';
import ProfileIcon from '../assets/icons/profile.svg';

import DashboardScreen from '../screens/dashboard/DashboardScreen';
import PostScreen from '../screens/posts/PostScreen';
import MeetingScreen from '../screens/meetings/MeetingScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#0A6EBD',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#0A6EBD',
        tabBarInactiveTintColor: '#888',

        tabBarIcon: ({ color, size }) => {
          const props = {
            width: size ?? 24,
            height: size ?? 24,
            color,
          };

          switch (route.name) {
            case 'Home':
              return <HomeIcon {...props} />;

            case 'Posts':
              return <PostsIcon {...props} />;

            case 'Customers':
              return <CustomersIcon {...props} />;

            case 'Profile':
              return <ProfileIcon {...props} />;

            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Posts" component={PostScreen} />
      <Tab.Screen name="Meetings" component={MeetingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}