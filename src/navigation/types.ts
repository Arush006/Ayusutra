import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  Home: undefined;
  Schedule: undefined;
  Feedback: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  DoctorDetails: { doctorId: string };
  AppointmentDetails: { appointmentId: string };
};