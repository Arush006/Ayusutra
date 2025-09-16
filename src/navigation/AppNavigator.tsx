import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RootStackParamList, MainTabParamList } from './types';
import { Colors } from '../theme/colors';

// Screen imports
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const screenOptions = {
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: Colors.gray,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: Platform.OS === 'ios' ? 80 : 60,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '500' as const,
  },
};

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Feedback" component={FeedbackScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name="Auth" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}

export default AppNavigator;