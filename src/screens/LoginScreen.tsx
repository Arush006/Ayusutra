import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Auth'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>AYUR SUTRA</Text>
      <Text style={styles.subtitle}>Your holistic health companion.</Text>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email or Username"
            placeholderTextColor={Colors.gray}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Colors.gray}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.dark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: Colors.dark,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 15,
  },
  forgotPasswordText: {
    color: Colors.primary,
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: Colors.gray,
    fontSize: 14,
  },
  signupLink: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;