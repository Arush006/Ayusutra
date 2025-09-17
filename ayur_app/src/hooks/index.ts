// Export all custom hooks
export { useAuth } from '../context/AuthContext';
export {
  useAppTranslation,
  useCommonTranslations,
  useDoctorTranslations,
  usePatientTranslations,
  useNotificationTranslations,
  useFeedbackTranslations,
  useTimeTranslations,
  formatTimeWithTranslation,
  formatRelativeTime,
} from './useTranslation';

// Custom hook for API calls
export const useApi = () => {
  // This would contain common API calling logic
  // Error handling, loading states, etc.
  return {
    // API methods
  };
};

// Custom hook for form validation
export const useValidation = () => {
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  return {
    validateEmail,
    validatePassword,
    validatePhone,
  };
};