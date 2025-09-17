import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

import { useAuth } from '../context/AuthContext';
import { RootStackParamList } from '../types';

// Screens
import SplashScreen from '../screens/common/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import DoctorTabs from './DoctorTabs';
import PatientTabs from './PatientTabs';
import NotificationsScreen from '../screens/common/NotificationsScreen';
import VoiceBotScreen from '../screens/common/VoiceBotScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { user } = useAuth();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        user.type === 'doctor' ? (
          <>
            <Stack.Screen 
              name="DoctorTabs" 
              component={DoctorTabs}
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Notifications" 
              component={NotificationsScreen}
              options={{ 
                headerShown: true,
                title: 'सूचनाएं',
                headerStyle: { backgroundColor: '#00BFA5' },
                headerTintColor: '#fff'
              }} 
            />
            <Stack.Screen 
              name="VoiceBot" 
              component={VoiceBotScreen}
              options={{ 
                headerShown: true,
                title: 'वॉइस बॉट',
                headerStyle: { backgroundColor: '#00BFA5' },
                headerTintColor: '#fff'
              }} 
            />
          </>
        ) : (
          <>
            <Stack.Screen 
              name="PatientTabs" 
              component={PatientTabs}
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Notifications" 
              component={NotificationsScreen}
              options={{ 
                headerShown: true,
                title: 'सूचनाएं',
                headerStyle: { backgroundColor: '#00BFA5' },
                headerTintColor: '#fff'
              }} 
            />
            <Stack.Screen 
              name="VoiceBot" 
              component={VoiceBotScreen}
              options={{ 
                headerShown: true,
                title: 'वॉइस बॉट',
                headerStyle: { backgroundColor: '#00BFA5' },
                headerTintColor: '#fff'
              }} 
            />
          </>
        )
      ) : (
        <Stack.Screen name="Auth" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;