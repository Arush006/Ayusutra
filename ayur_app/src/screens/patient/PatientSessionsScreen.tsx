import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';

const PatientSessionsScreen: React.FC = () => {
  // Mock data - will be replaced with API calls
  const sessions = [
    {
      id: '1',
      doctorName: 'Dr. Emily Carter',
      specialization: 'Cardiologist',
      date: 'Today, 26 Aug',
      time: '10:00 AM',
      status: 'scheduled',
      type: 'Follow-up Consultation',
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      specialization: 'Pediatrician',
      date: 'Tomorrow, 27 Aug',
      time: '2:00 PM',
      status: 'scheduled',
      type: 'Routine Checkup',
    },
    {
      id: '3',
      doctorName: 'Dr. Olivia Davis',
      specialization: 'Neurologist',
      date: 'Mon, 2 Sep',
      time: '11:00 AM',
      status: 'pending_confirmation',
      type: 'Initial Consultation',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return '#27AE60';
      case 'pending_confirmation':
        return '#F39C12';
      case 'completed':
        return '#3498DB';
      default:
        return '#95A5A6';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'Scheduled';
      case 'pending_confirmation':
        return 'Pending';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="My Sessions" 
        leftIcon="←"
        rightIcon="📅"
        onLeftPress={() => console.log('Back pressed')}
        onRightPress={() => console.log('Calendar pressed')}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.sessionsContainer}>
          {sessions.map((session) => (
            <Card key={session.id} style={styles.sessionCard}>
              <View style={styles.sessionContent}>
                <View style={styles.sessionHeader}>
                  <View style={styles.doctorInfo}>
                    <Text style={styles.doctorIcon}>👨‍⚕️</Text>
                    <View style={styles.doctorDetails}>
                      <Text style={styles.doctorName}>{session.doctorName}</Text>
                      <Text style={styles.specialization}>{session.specialization}</Text>
                    </View>
                  </View>
                  
                  <View style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(session.status) }
                  ]}>
                    <Text style={styles.statusText}>{getStatusText(session.status)}</Text>
                  </View>
                </View>
                
                <View style={styles.sessionDetails}>
                  <View style={styles.dateTimeRow}>
                    <Text style={styles.dateIcon}>📅</Text>
                    <Text style={styles.dateText}>{session.date}</Text>
                    <Text style={styles.timeIcon}>🕐</Text>
                    <Text style={styles.timeText}>{session.time}</Text>
                  </View>
                  
                  <Text style={styles.sessionType}>{session.type}</Text>
                </View>
              </View>
            </Card>
          ))}
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sessionsContainer: {
    paddingVertical: 20,
  },
  sessionCard: {
    marginBottom: 15,
  },
  sessionContent: {
    // Card content styling
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
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
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  sessionDetails: {
    marginTop: 10,
  },
  dateTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
  sessionType: {
    fontSize: 14,
    color: '#7F8C8D',
    fontStyle: 'italic',
  },
});

export default PatientSessionsScreen;