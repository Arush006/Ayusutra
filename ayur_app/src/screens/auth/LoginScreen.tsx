import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView 
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'doctor' | 'patient'>('patient');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    const success = await login(email, password, userType);
    setIsLoading(false);

    if (!success) {
      Alert.alert('Error', 'Invalid credentials. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>⏰</Text>
          </View>
          <Text style={styles.appName}>AYUR-SUTRA</Text>
          <Text style={styles.tagline}>Your holistic health companion.</Text>
        </View>

        <View style={styles.formContainer}>
          {/* User Type Selection */}
          <View style={styles.userTypeContainer}>
            <TouchableOpacity
              style={[
                styles.userTypeButton,
                userType === 'doctor' ? styles.userTypeButtonActive : styles.userTypeButtonInactive
              ]}
              onPress={() => setUserType('doctor')}
            >
              <Text style={styles.userTypeIcon}>👨‍⚕️</Text>
              <Text style={[
                styles.userTypeText,
                userType === 'doctor' ? styles.userTypeTextActive : styles.userTypeTextInactive
              ]}>
                Doctor
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.userTypeButton,
                userType === 'patient' ? styles.userTypeButtonActive : styles.userTypeButtonInactive
              ]}
              onPress={() => setUserType('patient')}
            >
              <Text style={styles.userTypeIcon}>👤</Text>
              <Text style={[
                styles.userTypeText,
                userType === 'patient' ? styles.userTypeTextActive : styles.userTypeTextInactive
              ]}>
                Patient
              </Text>
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>👤</Text>
              <TextInput
                style={styles.input}
                placeholder="Email or Username"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#BDC3C7"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#BDC3C7"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
    letterSpacing: 2,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  userTypeContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
    padding: 4,
  },
  userTypeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 6,
  },
  userTypeButtonActive: {
    backgroundColor: '#00BFA5',
  },
  userTypeButtonInactive: {
    backgroundColor: 'transparent',
  },
  userTypeIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  userTypeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  userTypeTextActive: {
    color: '#FFFFFF',
  },
  userTypeTextInactive: {
    color: '#7F8C8D',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  inputIcon: {
    fontSize: 20,
    marginRight: 15,
    color: '#7F8C8D',
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
    color: '#2C3E50',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#00BFA5',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#00BFA5',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#7F8C8D',
    fontSize: 16,
  },
  signUpLink: {
    color: '#00BFA5',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;