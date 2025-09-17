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

interface NotificationItem {
  id: string;
  icon: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const NotificationsScreen: React.FC = () => {
  // Mock data - will be replaced with API calls
  const notifications: NotificationItem[] = [
    {
      id: '1',
      icon: '✅',
      title: 'Appointment Confirmation',
      message: 'Your appointment is confirmed for tomorrow at 10:00 AM.',
      timestamp: '10:00 AM',
      isRead: false,
    },
    {
      id: '2',
      icon: '✅',
      title: 'Feedback Received',
      message: 'Your feedback has been received. Thank you!',
      timestamp: 'Yesterday',
      isRead: true,
    },
    {
      id: '3',
      icon: '✉️',
      title: 'New Message',
      message: 'Dr. Anya Sharma has sent you a message.',
      timestamp: '2 days ago',
      isRead: true,
    },
    {
      id: '4',
      icon: '💊',
      title: 'Prescription Ready',
      message: 'Your prescription is ready for pickup.',
      timestamp: '3 days ago',
      isRead: true,
    },
    {
      id: '5',
      icon: '🔔',
      title: 'Appointment Reminder',
      message: 'Reminder: Your appointment with Dr. Anya Sharma is in 2 days.',
      timestamp: '4 days ago',
      isRead: true,
    },
  ];

  const renderNotification = (notification: NotificationItem) => (
    <Card key={notification.id} style={styles.notificationCard}>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <View style={styles.iconContainer}>
            <Text style={styles.notificationIcon}>{notification.icon}</Text>
          </View>
          
          <View style={styles.notificationDetails}>
            <View style={styles.titleRow}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.timestamp}>{notification.timestamp}</Text>
            </View>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
          </View>
        </View>
        
        {!notification.isRead && <View style={styles.unreadDot} />}
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Notifications" 
        leftIcon="←"
        onLeftPress={() => console.log('Back pressed')}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.notificationsList}>
          {notifications.map(renderNotification)}
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
  },
  notificationsList: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  notificationCard: {
    marginBottom: 12,
    position: 'relative',
  },
  notificationContent: {
    position: 'relative',
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationIcon: {
    fontSize: 24,
  },
  notificationDetails: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    flex: 1,
    marginRight: 10,
  },
  timestamp: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
  },
  unreadDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00BFA5',
  },
});

export default NotificationsScreen;