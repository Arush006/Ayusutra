import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../context/AuthContext';
import { RootStackParamList } from '../../types';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface PendingAction {
  id: string;
  title: string;
  actionText: string;
  onPress: () => void;
}

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
}

const DoctorDashboardScreen: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - will be replaced with API calls
  const todaysAppointments = 5;
  
  const upcomingAppointments: Appointment[] = [
    {
      id: '1',
      patientName: 'Ravi Kumar',
      time: '10:30 AM - 11:00 AM',
      type: 'Follow-up Consultation',
    },
    {
      id: '2',
      patientName: 'Priya Sharma',
      time: '11:00 AM - 11:30 AM',
      type: 'Routine Checkup',
    },
  ];

  const pendingActions: PendingAction[] = [
    {
      id: '1',
      title: 'View Schedule & Appointments',
      actionText: 'View',
      onPress: () => navigation.navigate('DoctorTabs', { screen: 'DoctorSchedule' }),
    },
    {
      id: '2',
      title: 'Check Notifications',
      actionText: 'Check',
      onPress: () => navigation.navigate('Notifications'),
    },
    {
      id: '3',
      title: 'Patient Feedback',
      actionText: 'Review',
      onPress: () => navigation.navigate('DoctorTabs', { screen: 'DoctorFeedback' }),
    },
    {
      id: '4',
      title: 'Voice Bot Assistant',
      actionText: 'Open',
      onPress: () => navigation.navigate('VoiceBot'),
    },
  ];

  const renderAppointmentCard = (appointment: Appointment) => (
    <Card key={appointment.id} style={styles.appointmentCard}>
      <View style={styles.appointmentHeader}>
        <View style={styles.patientInfo}>
          <Text style={styles.patientIcon}>🧑‍⚕️</Text>
          <View style={styles.patientDetails}>
            <Text style={styles.patientName}>{appointment.patientName}</Text>
            <Text style={styles.appointmentTime}>{appointment.time}</Text>
            <Text style={styles.appointmentType}>{appointment.type}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreIcon}>⋮</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );

  const renderPendingAction = (action: PendingAction) => (
    <Card key={action.id} style={styles.actionCard}>
      <View style={styles.actionContent}>
        <Text style={styles.actionTitle}>{action.title}</Text>
        <Button
          title={action.actionText}
          onPress={action.onPress}
          variant="primary"
          style={styles.actionButton}
        />
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.appName}>Ayusutra</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>•</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for patients..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#BDC3C7"
            />
          </View>
        </View>

        {/* Daily Schedule Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Schedule</Text>
          <Card style={styles.scheduleCard}>
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleText}>
                You have <Text style={styles.appointmentCount}>{todaysAppointments} appointments</Text> today.
              </Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        {/* Upcoming Appointments Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {upcomingAppointments.map(renderAppointmentCard)}
        </View>

        {/* Pending Actions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Actions</Text>
          {pendingActions.map(renderPendingAction)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 15,
  },
  menuIcon: {
    fontSize: 24,
    color: '#2C3E50',
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginRight: 15,
    position: 'relative',
  },
  notificationIcon: {
    fontSize: 24,
    color: '#2C3E50',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#E74C3C',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5E6D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    paddingVertical: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 10,
    color: '#7F8C8D',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
  },
  scheduleCard: {
    backgroundColor: '#FFFFFF',
  },
  scheduleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleText: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
  },
  appointmentCount: {
    fontWeight: 'bold',
    color: '#00BFA5',
  },
  viewAllButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  viewAllText: {
    color: '#00BFA5',
    fontSize: 16,
    fontWeight: '600',
  },
  appointmentCard: {
    marginBottom: 12,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  patientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  patientIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  patientDetails: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 2,
  },
  appointmentTime: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 2,
  },
  appointmentType: {
    fontSize: 14,
    color: '#95A5A6',
  },
  moreButton: {
    padding: 5,
  },
  moreIcon: {
    fontSize: 20,
    color: '#7F8C8D',
  },
  actionCard: {
    marginBottom: 12,
  },
  actionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionTitle: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
    marginRight: 15,
  },
  actionButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    minHeight: 40,
  },
});

export default DoctorDashboardScreen;