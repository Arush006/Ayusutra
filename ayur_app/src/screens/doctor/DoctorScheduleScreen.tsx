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

const DoctorScheduleScreen: React.FC = () => {
  // Mock data - will be replaced with API calls
  const appointments = [
    {
      id: '1',
      patientName: 'Ravi Kumar',
      time: '10:30 AM - 11:00 AM',
      type: 'Follow-up Consultation',
      status: 'confirmed',
    },
    {
      id: '2',
      patientName: 'Priya Sharma',
      time: '11:00 AM - 11:30 AM',
      type: 'Routine Checkup',
      status: 'confirmed',
    },
    {
      id: '3',
      patientName: 'Amit Patel',
      time: '2:00 PM - 2:30 PM',
      type: 'Initial Consultation',
      status: 'pending',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Schedule" 
        leftIcon="←"
        rightIcon="📅"
        onLeftPress={() => console.log('Back pressed')}
        onRightPress={() => console.log('Calendar pressed')}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.dateSection}>
          <Text style={styles.dateTitle}>Today, September 17</Text>
          <Text style={styles.appointmentCount}>{appointments.length} appointments</Text>
        </View>

        <View style={styles.appointmentsList}>
          {appointments.map((appointment) => (
            <Card key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentContent}>
                <View style={styles.timeSection}>
                  <Text style={styles.timeText}>{appointment.time}</Text>
                  <View style={[
                    styles.statusDot,
                    appointment.status === 'confirmed' ? styles.confirmedDot : styles.pendingDot
                  ]} />
                </View>
                
                <View style={styles.appointmentDetails}>
                  <View style={styles.patientInfo}>
                    <Text style={styles.patientIcon}>👤</Text>
                    <View style={styles.patientDetails}>
                      <Text style={styles.patientName}>{appointment.patientName}</Text>
                      <Text style={styles.appointmentType}>{appointment.type}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.statusSection}>
                    <Text style={[
                      styles.statusText,
                      appointment.status === 'confirmed' ? styles.confirmedText : styles.pendingText
                    ]}>
                      {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </Text>
                  </View>
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
  dateSection: {
    paddingVertical: 20,
  },
  dateTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  appointmentCount: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  appointmentsList: {
    paddingBottom: 20,
  },
  appointmentCard: {
    marginBottom: 15,
  },
  appointmentContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeSection: {
    alignItems: 'center',
    marginRight: 15,
    minWidth: 80,
  },
  timeText: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  confirmedDot: {
    backgroundColor: '#27AE60',
  },
  pendingDot: {
    backgroundColor: '#F39C12',
  },
  appointmentDetails: {
    flex: 1,
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
    fontSize: 20,
    marginRight: 12,
  },
  patientDetails: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  appointmentType: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  statusSection: {
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  confirmedText: {
    color: '#27AE60',
  },
  pendingText: {
    color: '#F39C12',
  },
});

export default DoctorScheduleScreen;