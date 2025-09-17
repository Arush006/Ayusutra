import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DoctorTabParamList } from '../types';

// Screens
import DoctorDashboardScreen from '../screens/doctor/DoctorDashboardScreen';
import DoctorScheduleScreen from '../screens/doctor/DoctorScheduleScreen';
import NotificationsScreen from '../screens/common/NotificationsScreen';
import DoctorFeedbackScreen from '../screens/doctor/DoctorFeedbackScreen';
import VoiceBotScreen from '../screens/common/VoiceBotScreen';

const Stack = createNativeStackNavigator<DoctorTabParamList>();

const DoctorTabs: React.FC = () => {
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
        name="DoctorHome"
        component={DoctorDashboardScreen}
        options={{ title: 'डॉक्टर डैशबोर्ड' }}
      />
      <Stack.Screen
        name="DoctorSchedule"
        component={DoctorScheduleScreen}
        options={{ title: 'कार्यक्रम' }}
      />
      <Stack.Screen
        name="DoctorNotifications"
        component={NotificationsScreen}
        options={{ title: 'सूचनाएं' }}
      />
      <Stack.Screen
        name="DoctorFeedback"
        component={DoctorFeedbackScreen}
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

export default DoctorTabs;