// App Constants
export const APP_NAME = 'Ayur-Sutra';
export const APP_TAGLINE = 'Your holistic health companion';

// API Constants
export const API_BASE_URL = 'https://api.ayursutra.com'; // This would be your actual API URL
export const API_TIMEOUT = 10000; // 10 seconds

// Color Constants
export const COLORS = {
  // Primary Colors
  primary: '#00BFA5',
  primaryLight: '#4FD3B8',
  primaryDark: '#00A693',
  
  // Secondary Colors
  secondary: '#2C3E50',
  secondaryLight: '#34495E',
  secondaryDark: '#1B2631',
  
  // Background Colors
  background: '#F8F9FA',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#E9ECEF',
  
  // Text Colors
  textPrimary: '#2C3E50',
  textSecondary: '#7F8C8D',
  textLight: '#BDC3C7',
  textDisabled: '#95A5A6',
  
  // Status Colors
  success: '#27AE60',
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB',
  
  // Border Colors
  border: '#E9ECEF',
  borderLight: '#F1F3F4',
  borderDark: '#DEE2E6',
  
  // Shadow Colors
  shadow: '#000000',
  shadowLight: 'rgba(0, 0, 0, 0.1)',
  shadowMedium: 'rgba(0, 0, 0, 0.2)',
  shadowDark: 'rgba(0, 0, 0, 0.3)',
};

// Font Constants
export const FONTS = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
};

// Spacing Constants
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Border Radius Constants
export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  round: 50,
};

// Animation Constants
export const ANIMATION = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  timing: {
    easeInOut: 'ease-in-out',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    linear: 'linear',
  },
};

// Screen Dimensions
export const SCREEN = {
  width: '100%',
  height: '100%',
};

// Status Bar Height (for different platforms)
export const STATUS_BAR_HEIGHT = {
  ios: 44,
  android: 24,
};

// Tab Bar Height
export const TAB_BAR_HEIGHT = 60;

// Header Height
export const HEADER_HEIGHT = 56;

// Common Styles
export const COMMON_STYLES = {
  shadow: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  shadowMedium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  shadowLarge: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  flex1: {
    flex: 1,
  },
};

// Time Constants
export const TIME_FORMAT = {
  twelveHour: 'h:mm A',
  twentyFourHour: 'HH:mm',
  date: 'DD/MM/YYYY',
  dateTime: 'DD/MM/YYYY h:mm A',
  dayDate: 'dddd, DD MMM',
};

// Validation Constants
export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[\d\s\-\(\)]{10,}$/,
  password: {
    minLength: 6,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
  },
};

// Storage Keys (for AsyncStorage)
export const STORAGE_KEYS = {
  user: '@ayursutra_user',
  token: '@ayursutra_token',
  language: '@ayursutra_language',
  theme: '@ayursutra_theme',
  onboardingCompleted: '@ayursutra_onboarding_completed',
};

// App Config
export const APP_CONFIG = {
  version: '1.0.0',
  buildNumber: '1',
  supportEmail: 'support@ayursutra.com',
  supportPhone: '+91 1234567890',
  websiteUrl: 'https://ayursutra.com',
  privacyPolicyUrl: 'https://ayursutra.com/privacy',
  termsOfServiceUrl: 'https://ayursutra.com/terms',
};

// Notification Types
export const NOTIFICATION_TYPES = {
  APPOINTMENT_CONFIRMATION: 'appointment_confirmation',
  APPOINTMENT_REMINDER: 'appointment_reminder',
  FEEDBACK_RECEIVED: 'feedback_received',
  NEW_MESSAGE: 'new_message',
  PRESCRIPTION_READY: 'prescription_ready',
} as const;

// User Types
export const USER_TYPES = {
  DOCTOR: 'doctor',
  PATIENT: 'patient',
} as const;

// Appointment Status
export const APPOINTMENT_STATUS = {
  SCHEDULED: 'scheduled',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  PENDING_CONFIRMATION: 'pending_confirmation',
} as const;

// Therapy Types
export const THERAPY_TYPES = [
  'Abhyanga',
  'Shirodhara',
  'Panchakarma',
  'Swedana',
  'Nasya',
  'Udvartana',
  'Karna Purana',
  'Akshi Tarpana',
  'Meditation Therapy',
] as const;