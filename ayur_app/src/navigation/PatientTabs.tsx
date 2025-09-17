import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PatientTabParamList } from '../types';

// Screens
import PatientDashboardScreen from '../screens/patient/PatientDashboardScreen';
import PatientSessionsScreen from '../screens/patient/PatientSessionsScreen';
import NotificationsScreen from '../screens/common/NotificationsScreen';
import PatientFeedbackScreen from '../screens/patient/PatientFeedbackScreen';
import VoiceBotScreen from '../screens/common/VoiceBotScreen';

const Stack = createNativeStackNavigator<PatientTabParamList>();

const PatientTabs: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#00BFA5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="PatientHome"
        component={PatientDashboardScreen}
        options={{ title: 'रोगी डैशबोर्ड' }}
      />
      <Stack.Screen
        name="PatientSchedule"
        component={PatientSessionsScreen}
        options={{ title: 'सत्र' }}
      />
      <Stack.Screen
        name="PatientNotifications"
        component={NotificationsScreen}
        options={{ title: 'सूचनाएं' }}
      />
      <Stack.Screen
        name="PatientFeedback"
        component={PatientFeedbackScreen}
        options={{ title: 'प्रतिक्रिया' }}
      />
      <Stack.Screen
        name="VoiceBot"
        component={VoiceBotScreen}
        options={{ title: 'वॉइस बॉट' }}
      />
    </Stack.Navigator>
  );
};

export default PatientTabs;