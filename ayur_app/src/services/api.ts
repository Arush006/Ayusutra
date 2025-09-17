import { ApiResponse, User, Appointment, Notification, Feedback, BookingRequest } from '../types';
import {
  mockUsers,
  mockAppointments,
  mockNotifications,
  mockFeedbacks,
  mockTherapySessions,
  getUserById,
  getAppointmentsByUserId,
  getNotificationsByUserId,
  getFeedbacksByUserId,
  getTodaysAppointments,
  getUpcomingAppointments,
  getPendingAppointments,
  getCompletedAppointments,
} from '../api/mockData';

// Simulate API delay
const simulateDelay = (ms: number = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Authentication API
export const loginUser = async (
  email: string, 
  password: string, 
  userType: 'doctor' | 'patient'
): Promise<ApiResponse<User>> => {
  await simulateDelay(1000);
  
  try {
    // Mock authentication logic
    const user = mockUsers.find(u => 
      u.email.toLowerCase() === email.toLowerCase() && 
      u.type === userType
    );
    
    if (user) {
      return {
        success: true,
        data: user,
        message: 'Login successful'
      };
    } else {
      return {
        success: false,
        error: 'Invalid credentials'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Login failed'
    };
  }
};

// User API
export const getCurrentUser = async (userId: string): Promise<ApiResponse<User>> => {
  await simulateDelay(500);
  
  try {
    const user = getUserById(userId);
    if (user) {
      return {
        success: true,
        data: user
      };
    } else {
      return {
        success: false,
        error: 'User not found'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch user'
    };
  }
};

// Appointments API
export const getAppointments = async (
  userId: string, 
  userType: 'doctor' | 'patient'
): Promise<ApiResponse<Appointment[]>> => {
  await simulateDelay(800);
  
  try {
    const appointments = getAppointmentsByUserId(userId, userType);
    return {
      success: true,
      data: appointments
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch appointments'
    };
  }
};

export const getTodayAppointments = async (
  userId: string, 
  userType: 'doctor' | 'patient'
): Promise<ApiResponse<Appointment[]>> => {
  await simulateDelay(600);
  
  try {
    const appointments = getTodaysAppointments(userId, userType);
    return {
      success: true,
      data: appointments
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch today\'s appointments'
    };
  }
};

export const getUpcomingAppointmentsApi = async (
  userId: string, 
  userType: 'doctor' | 'patient'
): Promise<ApiResponse<Appointment[]>> => {
  await simulateDelay(600);
  
  try {
    const appointments = getUpcomingAppointments(userId, userType);
    return {
      success: true,
      data: appointments
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch upcoming appointments'
    };
  }
};

export const getPendingAppointmentsApi = async (
  userId: string, 
  userType: 'doctor' | 'patient'
): Promise<ApiResponse<Appointment[]>> => {
  await simulateDelay(600);
  
  try {
    const appointments = getPendingAppointments(userId, userType);
    return {
      success: true,
      data: appointments
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch pending appointments'
    };
  }
};

export const getCompletedAppointmentsApi = async (
  userId: string, 
  userType: 'doctor' | 'patient'
): Promise<ApiResponse<Appointment[]>> => {
  await simulateDelay(600);
  
  try {
    const appointments = getCompletedAppointments(userId, userType);
    return {
      success: true,
      data: appointments
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch completed appointments'
    };
  }
};

export const bookAppointment = async (bookingRequest: BookingRequest): Promise<ApiResponse<Appointment>> => {
  await simulateDelay(1200);
  
  try {
    // Mock booking logic
    const newAppointment: Appointment = {
      id: `apt_${Date.now()}`,
      patientId: bookingRequest.patientId,
      doctorId: bookingRequest.doctorId,
      patientName: getUserById(bookingRequest.patientId)?.name || 'Unknown Patient',
      doctorName: getUserById(bookingRequest.doctorId)?.name || 'Unknown Doctor',
      date: bookingRequest.preferredDate,
      startTime: bookingRequest.preferredTime,
      endTime: bookingRequest.preferredTime, // This would be calculated based on therapy duration
      type: 'Consultation',
      status: 'pending_confirmation',
      therapyType: getUserById(bookingRequest.therapyId)?.name,
    };
    
    // Add to mock data (in real app, this would be saved to database)
    mockAppointments.push(newAppointment);
    
    return {
      success: true,
      data: newAppointment,
      message: 'Appointment booked successfully'
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to book appointment'
    };
  }
};

// Notifications API
export const getNotifications = async (userId: string): Promise<ApiResponse<Notification[]>> => {
  await simulateDelay(600);
  
  try {
    const notifications = getNotificationsByUserId(userId);
    return {
      success: true,
      data: notifications.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch notifications'
    };
  }
};

export const markNotificationAsRead = async (notificationId: string): Promise<ApiResponse<boolean>> => {
  await simulateDelay(300);
  
  try {
    // Mock marking as read
    const notification = mockNotifications.find(n => n.id === notificationId);
    if (notification) {
      notification.isRead = true;
      return {
        success: true,
        data: true,
        message: 'Notification marked as read'
      };
    } else {
      return {
        success: false,
        error: 'Notification not found'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to mark notification as read'
    };
  }
};

// Feedback API
export const getFeedbacks = async (
  userId: string, 
  userType: 'doctor' | 'patient'
): Promise<ApiResponse<Feedback[]>> => {
  await simulateDelay(700);
  
  try {
    const feedbacks = getFeedbacksByUserId(userId, userType);
    return {
      success: true,
      data: feedbacks.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch feedbacks'
    };
  }
};

export const submitFeedback = async (
  fromUserId: string,
  toUserId: string,
  rating: number,
  comment: string,
  appointmentId?: string
): Promise<ApiResponse<Feedback>> => {
  await simulateDelay(1000);
  
  try {
    const fromUser = getUserById(fromUserId);
    const toUser = getUserById(toUserId);
    
    if (!fromUser || !toUser) {
      return {
        success: false,
        error: 'User not found'
      };
    }
    
    const newFeedback: Feedback = {
      id: `fed_${Date.now()}`,
      fromUserId,
      toUserId,
      fromUserName: fromUser.name,
      toUserName: toUser.name,
      rating,
      comment,
      timestamp: new Date().toISOString(),
      appointmentId,
    };
    
    // Add to mock data
    mockFeedbacks.push(newFeedback);
    
    return {
      success: true,
      data: newFeedback,
      message: 'Feedback submitted successfully'
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to submit feedback'
    };
  }
};

// Therapy Sessions API
export const getTherapySessions = async (): Promise<ApiResponse<any[]>> => {
  await simulateDelay(500);
  
  try {
    return {
      success: true,
      data: mockTherapySessions
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch therapy sessions'
    };
  }
};

// Search API
export const searchPatients = async (query: string, doctorId: string): Promise<ApiResponse<User[]>> => {
  await simulateDelay(600);
  
  try {
    // Mock search logic - find patients who have appointments with this doctor
    const doctorAppointments = mockAppointments.filter(apt => apt.doctorId === doctorId);
    const patientIds = [...new Set(doctorAppointments.map(apt => apt.patientId))];
    
    const patients = mockUsers.filter(user => 
      user.type === 'patient' && 
      patientIds.includes(user.id) &&
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return {
      success: true,
      data: patients
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to search patients'
    };
  }
};

export const searchDoctors = async (query: string): Promise<ApiResponse<User[]>> => {
  await simulateDelay(600);
  
  try {
    const doctors = mockUsers.filter(user => 
      user.type === 'doctor' &&
      (user.name.toLowerCase().includes(query.toLowerCase()) ||
       user.specialization?.toLowerCase().includes(query.toLowerCase()))
    );
    
    return {
      success: true,
      data: doctors
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to search doctors'
    };
  }
};