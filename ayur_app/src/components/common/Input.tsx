import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { InputFieldProps } from '../../types';

const Input: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  style,
  leftIcon,
  rightIcon,
  onRightIconPress,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const handleRightIconPress = () => {
    if (secureTextEntry) {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (onRightIconPress) {
      onRightIconPress();
    }
  };

  const getRightIcon = () => {
    if (secureTextEntry) {
      return isPasswordVisible ? '👁️' : '🙈';
    }
    return rightIcon || '';
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[
        styles.inputWrapper,
        isFocused && styles.inputWrapperFocused,
      ]}>
        {leftIcon && (
          <Text style={styles.leftIcon}>{leftIcon}</Text>
        )}
        
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor="#BDC3C7"
        />
        
        {(rightIcon || secureTextEntry) && (
          <TouchableOpacity
            style={styles.rightIconContainer}
            onPress={handleRightIconPress}
          >
            <Text style={styles.rightIcon}>{getRightIcon()}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    minHeight: 50,
  },
  inputWrapperFocused: {
    borderColor: '#00BFA5',
    backgroundColor: '#FFFFFF',
  },
  leftIcon: {
    fontSize: 20,
    marginRight: 15,
    color: '#7F8C8D',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
    paddingVertical: 0,
  },
  rightIconContainer: {
    padding: 5,
  },
  rightIcon: {
    fontSize: 20,
    color: '#7F8C8D',
  },
});

export default Input;