import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Session {
  id: string;
  doctorName: string;
  specialization: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'pending_confirmation';
}

const PatientDashboardScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  // Mock data - will be replaced with API calls
  const todaysSessions: Session[] = [
    {
      id: '1',
      doctorName: 'Dr. Emily Carter',
      specialization: 'Cardiologist',
      date: 'Today, 26 Aug',
      time: '10:00 AM',
      status: 'scheduled',
    },
  ];

  const upcomingSessions: Session[] = [
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      specialization: 'Pediatrician',
      date: 'Tomorrow, 27 Aug',
      time: '2:00 PM',
      status: 'scheduled',
    },
  ];

  const pendingConfirmation: Session[] = [
    {
      id: '3',
      doctorName: 'Dr. Olivia Davis',
      specialization: 'Neurologist',
      date: 'Mon, 2 Sep',
      time: '11:00 AM',
      status: 'pending_confirmation',
    },
  ];

  const completedSessions: Session[] = [
    {
      id: '4',
      doctorName: 'Dr. Ethan Clark',
      specialization: 'Psychiatrist',
      date: 'Fri, 19 Aug',
      time: '9:00 AM',
      status: 'completed',
    },
  ];

  const renderSessionCard = (session: Session, showButton: boolean = false, buttonText?: string) => (
    <Card key={session.id} style={styles.sessionCard}>
      <View style={styles.sessionHeader}>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorIcon}>👨‍⚕️</Text>
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>{session.doctorName}</Text>
            <Text style={styles.specialization}>{session.specialization}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.sessionMeta}>
        <View style={styles.dateTimeInfo}>
          <Text style={styles.dateIcon}>📅</Text>
          <Text style={styles.dateText}>{session.date}</Text>
          <Text style={styles.timeIcon}>🕙</Text>
          <Text style={styles.timeText}>{session.time}</Text>
        </View>
      </View>

      {showButton && buttonText && (
        <View style={styles.buttonContainer}>
          <Button
            title={buttonText}
            onPress={() => console.log(`Action for session ${session.id}`)}
            variant="primary"
            style={styles.sessionButton}
          />
        </View>
      )}
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Sessions</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Today's Sessions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Sessions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PatientTabs', { screen: 'PatientSchedule' })}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {todaysSessions.length > 0 ? (
            todaysSessions.map((session) => renderSessionCard(session, true, 'View Details'))
          ) : (
            <Card style={styles.emptyCard}>
              <Text style={styles.emptyText}>No sessions scheduled for today</Text>
            </Card>
          )}
        </View>

        {/* Upcoming Sessions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PatientTabs', { screen: 'PatientSchedule' })}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {upcomingSessions.map((session) => renderSessionCard(session, true, 'View Details'))}
        </View>

        {/* Pending Confirmation */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pending Confirmation</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {pendingConfirmation.map((session) => renderSessionCard(session))}
        </View>

        {/* Completed Sessions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Completed Sessions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PatientTabs', { screen: 'PatientFeedback' })}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {completedSessions.map((session) => renderSessionCard(session, true, 'View Details'))}
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  seeAllText: {
    fontSize: 16,
    color: '#00BFA5',
    fontWeight: '600',
  },
  sessionCard: {
    marginBottom: 12,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  doctorIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  specialization: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  sessionMeta: {
    marginBottom: 15,
  },
  dateTimeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#2C3E50',
    marginRight: 20,
  },
  timeIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#2C3E50',
  },
  buttonContainer: {
    alignItems: 'flex-start',
  },
  sessionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 40,
  },
  emptyCard: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  emptyText: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
  },
});

export default PatientDashboardScreen;