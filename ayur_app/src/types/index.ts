import React from 'react';

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  type: 'doctor' | 'patient';
  specialization?: string; // For doctors
  avatar?: string;
  phone?: string;
}

// Authentication Types
export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, userType: 'doctor' | 'patient') => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

// Appointment Types
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  patientName: string;
  doctorName: string;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'pending_confirmation';
  therapyType?: string;
}

// Notification Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'appointment_confirmation' | 'feedback_received' | 'new_message' | 'prescription_ready' | 'appointment_reminder';
  timestamp: string;
  isRead: boolean;
  userId: string;
}

// Feedback Types
export interface Feedback {
  id: string;
  fromUserId: string;
  toUserId: string;
  fromUserName: string;
  toUserName: string;
  rating: number;
  comment: string;
  timestamp: string;
  appointmentId?: string;
}

// Navigation Types
export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  DoctorTabs: { screen?: keyof DoctorTabParamList };
  PatientTabs: { screen?: keyof PatientTabParamList };
  Login: undefined;
  SignUp: undefined;
  DoctorDashboard: undefined;
  PatientDashboard: undefined;
  Notifications: undefined;
  VoiceBot: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type DoctorTabParamList = {
  DoctorHome: undefined;
  DoctorSchedule: undefined;
  DoctorNotifications: undefined;
  DoctorFeedback: undefined;
  VoiceBot: undefined;
};

export type PatientTabParamList = {
  PatientHome: undefined;
  PatientSchedule: undefined;
  PatientNotifications: undefined;
  PatientFeedback: undefined;
  VoiceBot: undefined;
};

// Component Props Types
export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  style?: import('react-native').ViewStyle;
}

export interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  style?: any;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
}

export interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Session/Therapy Types
export interface TherapySession {
  id: string;
  name: string;
  duration: number; // in minutes
  description: string;
  benefits: string[];
  price: number;
}

export interface BookingRequest {
  therapyId: string;
  doctorId: string;
  patientId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

// Language Types
export interface LanguageOption {
  code: 'en' | 'hi';
  name: string;
  nativeName: string;
}
