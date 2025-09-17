import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useAuth } from '../context/AuthContext';

interface CustomDrawerContentProps {
  navigation: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const menuItems = [
    { icon: '🏠', label: 'Home', onPress: () => navigation.navigate('DoctorMain') },
    { icon: '📅', label: 'Schedule', onPress: () => navigation.navigate('DoctorMain', { screen: 'DoctorSchedule' }) },
    { icon: '🔔', label: 'Notifications', onPress: () => navigation.navigate('DoctorMain', { screen: 'DoctorNotifications' }) },
    { icon: '💬', label: 'Patient Feedback', onPress: () => navigation.navigate('DoctorMain', { screen: 'DoctorFeedback' }) },
  ];

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>👨‍⚕️</Text>
          </View>
          <Text style={styles.userName}>{user?.name || 'Dr. Amelia Chen'}</Text>
          <Text style={styles.userRole}>{user?.specialization || 'Cardiologist'}</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>

      {/* Logout Button */}
      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  userRole: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  menuSection: {
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 30,
  },
  menuLabel: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    padding: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 30,
  },
  logoutText: {
    fontSize: 16,
    color: '#E74C3C',
    fontWeight: '500',
  },
});

export default CustomDrawerContent;