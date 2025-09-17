import { useTranslation } from 'react-i18next';

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: 'en' | 'hi') => {
    return i18n.changeLanguage(language);
  };

  const getCurrentLanguage = (): 'en' | 'hi' => {
    return i18n.language as 'en' | 'hi';
  };

  const isRTL = (): boolean => {
    // Hindi doesn't use RTL, but this can be useful for other languages
    return false;
  };

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    isRTL,
    language: i18n.language,
  };
};

// Custom hook for specific translation keys
export const useCommonTranslations = () => {
  const { t } = useAppTranslation();

  return {
    // Common
    appName: t('common.appName'),
    tagline: t('common.tagline'),
    loading: t('common.loading'),
    error: t('common.error'),
    success: t('common.success'),
    cancel: t('common.cancel'),
    confirm: t('common.confirm'),
    save: t('common.save'),
    edit: t('common.edit'),
    delete: t('common.delete'),
    back: t('common.back'),
    next: t('common.next'),
    done: t('common.done'),
    viewAll: t('common.viewAll'),
    seeAll: t('common.seeAll'),

    // Auth
    login: t('auth.login'),
    signup: t('auth.signup'),
    email: t('auth.email'),
    password: t('auth.password'),
    forgotPassword: t('auth.forgotPassword'),
    dontHaveAccount: t('auth.dontHaveAccount'),
    alreadyHaveAccount: t('auth.alreadyHaveAccount'),
    doctor: t('auth.doctor'),
    patient: t('auth.patient'),
    selectUserType: t('auth.selectUserType'),
    loginSuccess: t('auth.loginSuccess'),
    loginError: t('auth.loginError'),

    // Navigation
    home: t('navigation.home'),
    schedule: t('navigation.schedule'),
    notifications: t('navigation.notifications'),
    feedback: t('navigation.feedback'),
    profile: t('navigation.profile'),
    voiceBot: t('navigation.voiceBot'),
    patientFeedback: t('navigation.patientFeedback'),
    logout: t('navigation.logout'),
  };
};

export const useDoctorTranslations = () => {
  const { t } = useAppTranslation();

  return {
    dashboard: t('doctor.dashboard'),
    dailySchedule: t('doctor.dailySchedule'),
    appointments: t('doctor.appointments'),
    upcomingAppointments: t('doctor.upcomingAppointments'),
    pendingActions: t('doctor.pendingActions'),
    reviewLabReports: t('doctor.reviewLabReports'),
    approvePrescription: t('doctor.approvePrescription'),
    review: t('doctor.review'),
    approve: t('doctor.approve'),
    followUpConsultation: t('doctor.followUpConsultation'),
    routineCheckup: t('doctor.routineCheckup'),
    searchPatients: t('doctor.searchPatients'),
  };
};

export const usePatientTranslations = () => {
  const { t } = useAppTranslation();

  return {
    mySessions: t('patient.mySessions'),
    todaysSessions: t('patient.todaysSessions'),
    upcomingSessions: t('patient.upcomingSessions'),
    pendingConfirmation: t('patient.pendingConfirmation'),
    completedSessions: t('patient.completedSessions'),
    viewDetails: t('patient.viewDetails'),
    cardiologist: t('patient.cardiologist'),
    pediatrician: t('patient.pediatrician'),
    neurologist: t('patient.neurologist'),
    psychiatrist: t('patient.psychiatrist'),
  };
};

export const useNotificationTranslations = () => {
  const { t } = useAppTranslation();

  return {
    title: t('notifications.title'),
    appointmentConfirmation: t('notifications.appointmentConfirmation'),
    appointmentConfirmed: t('notifications.appointmentConfirmed'),
    feedbackReceived: t('notifications.feedbackReceived'),
    feedbackReceivedMessage: t('notifications.feedbackReceivedMessage'),
    newMessage: t('notifications.newMessage'),
    newMessageFrom: t('notifications.newMessageFrom'),
    prescriptionReady: t('notifications.prescriptionReady'),
    prescriptionReadyMessage: t('notifications.prescriptionReadyMessage'),
    appointmentReminder: t('notifications.appointmentReminder'),
    appointmentReminderMessage: t('notifications.appointmentReminderMessage'),
    yesterday: t('notifications.yesterday'),
    daysAgo: t('notifications.daysAgo'),
  };
};

export const useFeedbackTranslations = () => {
  const { t } = useAppTranslation();

  return {
    title: t('feedback.title'),
    recentFeedback: t('feedback.recentFeedback'),
    excellentCare: t('feedback.excellentCare'),
    veryProfessional: t('feedback.veryProfessional'),
    friendlyKnowledgeable: t('feedback.friendlyKnowledgeable'),
    greatExperience: t('feedback.greatExperience'),
    submitFeedback: t('feedback.submitFeedback'),
    rating: t('feedback.rating'),
    comments: t('feedback.comments'),
    writeFeedback: t('feedback.writeFeedback'),
  };
};

export const useTimeTranslations = () => {
  const { t } = useAppTranslation();

  return {
    today: t('time.today'),
    tomorrow: t('time.tomorrow'),
    yesterday: t('time.yesterday'),
    am: t('time.am'),
    pm: t('time.pm'),
    minutes: t('time.minutes'),
    hours: t('time.hours'),
    days: t('time.days'),
  };
};

// Helper function to format time with translation
export const formatTimeWithTranslation = (time: string, t: (key: string) => string): string => {
  if (time.includes('AM')) {
    return time.replace('AM', t('time.am'));
  }
  if (time.includes('PM')) {
    return time.replace('PM', t('time.pm'));
  }
  return time;
};

// Helper function to format relative time with translation
export const formatRelativeTime = (timestamp: string, t: (key: string) => string): string => {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return t('time.today');
  } else if (diffInDays === 1) {
    return t('time.yesterday');
  } else {
    return `${diffInDays} ${t('time.daysAgo')}`;
  }
};