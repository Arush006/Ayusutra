import { User, Appointment, Notification, Feedback, TherapySession } from '../types';

// Mock Users Data
export const mockUsers: User[] = [
  // Doctors
  {
    id: 'doc_1',
    name: 'Dr. Amelia Chen',
    email: 'amelia.chen@ayursutra.com',
    type: 'doctor',
    specialization: 'Cardiologist',
    avatar: 'doctor_avatar_1',
    phone: '+91 9876543210',
  },
  {
    id: 'doc_2',
    name: 'Dr. Emily Carter',
    email: 'emily.carter@ayursutra.com',
    type: 'doctor',
    specialization: 'Ayurvedic Specialist',
    avatar: 'doctor_avatar_2',
    phone: '+91 9876543211',
  },
  {
    id: 'doc_3',
    name: 'Dr. Michael Chen',
    email: 'michael.chen@ayursutra.com',
    type: 'doctor',
    specialization: 'Pediatrician',
    avatar: 'doctor_avatar_3',
    phone: '+91 9876543212',
  },
  {
    id: 'doc_4',
    name: 'Dr. Olivia Davis',
    email: 'olivia.davis@ayursutra.com',
    type: 'doctor',
    specialization: 'Neurologist',
    avatar: 'doctor_avatar_4',
    phone: '+91 9876543213',
  },
  {
    id: 'doc_5',
    name: 'Dr. Ethan Clark',
    email: 'ethan.clark@ayursutra.com',
    type: 'doctor',
    specialization: 'Psychiatrist',
    avatar: 'doctor_avatar_5',
    phone: '+91 9876543214',
  },
  // Patients
  {
    id: 'pat_1',
    name: 'Ravi Kumar',
    email: 'ravi.kumar@email.com',
    type: 'patient',
    avatar: 'patient_avatar_1',
    phone: '+91 9876543220',
  },
  {
    id: 'pat_2',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    type: 'patient',
    avatar: 'patient_avatar_2',
    phone: '+91 9876543221',
  },
  {
    id: 'pat_3',
    name: 'Amit Patel',
    email: 'amit.patel@email.com',
    type: 'patient',
    avatar: 'patient_avatar_3',
    phone: '+91 9876543222',
  },
  {
    id: 'pat_4',
    name: 'Sunita Gupta',
    email: 'sunita.gupta@email.com',
    type: 'patient',
    avatar: 'patient_avatar_4',
    phone: '+91 9876543223',
  },
];

// Mock Appointments Data
export const mockAppointments: Appointment[] = [
  {
    id: 'apt_1',
    patientId: 'pat_1',
    doctorId: 'doc_1',
    patientName: 'Ravi Kumar',
    doctorName: 'Dr. Amelia Chen',
    date: '2025-09-17',
    startTime: '10:30',
    endTime: '11:00',
    type: 'Follow-up Consultation',
    status: 'scheduled',
    therapyType: 'Abhyanga',
  },
  {
    id: 'apt_2',
    patientId: 'pat_2',
    doctorId: 'doc_1',
    patientName: 'Priya Sharma',
    doctorName: 'Dr. Amelia Chen',
    date: '2025-09-17',
    startTime: '11:00',
    endTime: '11:30',
    type: 'Routine Checkup',
    status: 'scheduled',
    therapyType: 'Shirodhara',
  },
  {
    id: 'apt_3',
    patientId: 'pat_3',
    doctorId: 'doc_2',
    patientName: 'Amit Patel',
    doctorName: 'Dr. Emily Carter',
    date: '2025-09-18',
    startTime: '14:00',
    endTime: '14:30',
    type: 'Initial Consultation',
    status: 'pending_confirmation',
    therapyType: 'Panchakarma',
  },
  {
    id: 'apt_4',
    patientId: 'pat_1',
    doctorId: 'doc_3',
    patientName: 'Ravi Kumar',
    doctorName: 'Dr. Michael Chen',
    date: '2025-09-18',
    startTime: '14:00',
    endTime: '14:30',
    type: 'Follow-up',
    status: 'scheduled',
  },
  {
    id: 'apt_5',
    patientId: 'pat_4',
    doctorId: 'doc_5',
    patientName: 'Sunita Gupta',
    doctorName: 'Dr. Ethan Clark',
    date: '2025-08-19',
    startTime: '09:00',
    endTime: '09:30',
    type: 'Therapy Session',
    status: 'completed',
    therapyType: 'Meditation Therapy',
  },
];

// Mock Notifications Data
export const mockNotifications: Notification[] = [
  {
    id: 'not_1',
    title: 'Appointment Confirmation',
    message: 'Your appointment is confirmed for tomorrow at 10:00 AM.',
    type: 'appointment_confirmation',
    timestamp: '2025-09-17T10:00:00Z',
    isRead: false,
    userId: 'pat_1',
  },
  {
    id: 'not_2',
    title: 'Feedback Received',
    message: 'Your feedback has been received. Thank you!',
    type: 'feedback_received',
    timestamp: '2025-09-16T15:30:00Z',
    isRead: true,
    userId: 'pat_1',
  },
  {
    id: 'not_3',
    title: 'New Message',
    message: 'Dr. Anya Sharma has sent you a message.',
    type: 'new_message',
    timestamp: '2025-09-15T12:20:00Z',
    isRead: true,
    userId: 'pat_1',
  },
  {
    id: 'not_4',
    title: 'Prescription Ready',
    message: 'Your prescription is ready for pickup.',
    type: 'prescription_ready',
    timestamp: '2025-09-14T16:45:00Z',
    isRead: true,
    userId: 'pat_1',
  },
  {
    id: 'not_5',
    title: 'Appointment Reminder',
    message: 'Reminder: Your appointment with Dr. Anya Sharma is in 2 days.',
    type: 'appointment_reminder',
    timestamp: '2025-09-13T09:00:00Z',
    isRead: true,
    userId: 'pat_1',
  },
];

// Mock Feedback Data
export const mockFeedbacks: Feedback[] = [
  {
    id: 'fed_1',
    fromUserId: 'pat_1',
    toUserId: 'doc_1',
    fromUserName: 'Ravi Kumar',
    toUserName: 'Dr. Amelia Chen',
    rating: 5,
    comment: 'Excellent care and communication. Dr. Chen is very knowledgeable and patient.',
    timestamp: '2025-09-16T14:20:00Z',
    appointmentId: 'apt_1',
  },
  {
    id: 'fed_2',
    fromUserId: 'pat_2',
    toUserId: 'doc_3',
    fromUserName: 'Priya Sharma',
    toUserName: 'Dr. Michael Chen',
    rating: 5,
    comment: 'Very professional and helpful. The treatment was effective.',
    timestamp: '2025-09-15T11:30:00Z',
  },
  {
    id: 'fed_3',
    fromUserId: 'pat_3',
    toUserId: 'doc_2',
    fromUserName: 'Amit Patel',
    toUserName: 'Dr. Emily Carter',
    rating: 4,
    comment: 'Friendly and knowledgeable. Good experience overall.',
    timestamp: '2025-09-14T16:15:00Z',
  },
  {
    id: 'fed_4',
    fromUserId: 'pat_4',
    toUserId: 'doc_4',
    fromUserName: 'Sunita Gupta',
    toUserName: 'Dr. Olivia Davis',
    rating: 5,
    comment: 'Great experience overall. Very satisfied with the treatment.',
    timestamp: '2025-09-13T10:45:00Z',
  },
];

// Mock Therapy Sessions Data
export const mockTherapySessions: TherapySession[] = [
  {
    id: 'ther_1',
    name: 'Abhyanga',
    duration: 60,
    description: 'Full body oil massage with warm herbal oils',
    benefits: [
      'Improves circulation',
      'Relieves muscle tension',
      'Promotes relaxation',
      'Enhances skin health'
    ],
    price: 2500,
  },
  {
    id: 'ther_2',
    name: 'Shirodhara',
    duration: 45,
    description: 'Continuous pouring of warm oil on the forehead',
    benefits: [
      'Reduces stress and anxiety',
      'Improves sleep quality',
      'Enhances mental clarity',
      'Balances nervous system'
    ],
    price: 3000,
  },
  {
    id: 'ther_3',
    name: 'Panchakarma',
    duration: 90,
    description: 'Complete detoxification and rejuvenation therapy',
    benefits: [
      'Deep detoxification',
      'Rejuvenates body and mind',
      'Improves immunity',
      'Restores natural balance'
    ],
    price: 5000,
  },
  {
    id: 'ther_4',
    name: 'Swedana',
    duration: 30,
    description: 'Herbal steam therapy for relaxation and detox',
    benefits: [
      'Opens pores',
      'Eliminates toxins',
      'Improves skin texture',
      'Relieves joint stiffness'
    ],
    price: 1500,
  },
  {
    id: 'ther_5',
    name: 'Nasya',
    duration: 20,
    description: 'Nasal administration of medicated oils',
    benefits: [
      'Clears nasal passages',
      'Improves breathing',
      'Reduces headaches',
      'Enhances mental clarity'
    ],
    price: 1200,
  },
];

// Helper functions to get specific data
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getAppointmentsByUserId = (userId: string, userType: 'doctor' | 'patient'): Appointment[] => {
  if (userType === 'doctor') {
    return mockAppointments.filter(apt => apt.doctorId === userId);
  } else {
    return mockAppointments.filter(apt => apt.patientId === userId);
  }
};

export const getNotificationsByUserId = (userId: string): Notification[] => {
  return mockNotifications.filter(not => not.userId === userId);
};

export const getFeedbacksByUserId = (userId: string, userType: 'doctor' | 'patient'): Feedback[] => {
  if (userType === 'doctor') {
    return mockFeedbacks.filter(fed => fed.toUserId === userId);
  } else {
    return mockFeedbacks.filter(fed => fed.fromUserId === userId);
  }
};

export const getTodaysAppointments = (userId: string, userType: 'doctor' | 'patient'): Appointment[] => {
  const today = new Date().toISOString().split('T')[0];
  const appointments = getAppointmentsByUserId(userId, userType);
  return appointments.filter(apt => apt.date === today);
};

export const getUpcomingAppointments = (userId: string, userType: 'doctor' | 'patient'): Appointment[] => {
  const today = new Date().toISOString().split('T')[0];
  const appointments = getAppointmentsByUserId(userId, userType);
  return appointments.filter(apt => apt.date > today && apt.status === 'scheduled');
};

export const getPendingAppointments = (userId: string, userType: 'doctor' | 'patient'): Appointment[] => {
  const appointments = getAppointmentsByUserId(userId, userType);
  return appointments.filter(apt => apt.status === 'pending_confirmation');
};

export const getCompletedAppointments = (userId: string, userType: 'doctor' | 'patient'): Appointment[] => {
  const appointments = getAppointmentsByUserId(userId, userType);
  return appointments.filter(apt => apt.status === 'completed');
};
