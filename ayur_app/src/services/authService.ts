import { User } from '../types';
import { loginUser as apiLogin } from './api';

// Authentication service class
class AuthService {
  private currentUser: User | null = null;
  
  async login(email: string, password: string, userType: 'doctor' | 'patient'): Promise<User | null> {
    try {
      const response = await apiLogin(email, password, userType);
      
      if (response.success && response.data) {
        this.currentUser = response.data;
        // In a real app, you would store the token in secure storage
        return response.data;
      } else {
        throw new Error(response.error || 'Login failed');
      }
    } catch (error) {
      console.error('AuthService login error:', error);
      throw error;
    }
  }
  
  logout(): void {
    this.currentUser = null;
    // In a real app, you would clear the stored token
    console.log('User logged out');
  }
  
  getCurrentUser(): User | null {
    return this.currentUser;
  }
  
  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
  
  setCurrentUser(user: User): void {
    this.currentUser = user;
  }
}

// Export a singleton instance
export const authService = new AuthService();
export default authService;