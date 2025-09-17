import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';

interface FeedbackItem {
  id: string;
  patientName: string;
  rating: number;
  comment: string;
  timestamp: string;
  patientAvatar: string;
}

const DoctorFeedbackScreen: React.FC = () => {
  // Mock data - will be replaced with API calls
  const feedbacks: FeedbackItem[] = [
    {
      id: '1',
      patientName: 'Dr. Emily Carter',
      rating: 5,
      comment: 'Excellent care and communication',
      timestamp: 'Recent',
      patientAvatar: '👩‍⚕️',
    },
    {
      id: '2',
      patientName: 'Dr. Michael Chen',
      rating: 5,
      comment: 'Very professional and helpful',
      timestamp: 'Recent',
      patientAvatar: '👨‍⚕️',
    },
    {
      id: '3',
      patientName: 'Dr. Sarah Jones',
      rating: 4,
      comment: 'Friendly and knowledgeable',
      timestamp: 'Recent',
      patientAvatar: '👩‍⚕️',
    },
    {
      id: '4',
      patientName: 'Dr. David Lee',
      rating: 5,
      comment: 'Great experience overall',
      timestamp: 'Recent',
      patientAvatar: '👨‍⚕️',
    },
  ];

  const renderStars = (rating: number) => {
    const stars: React.ReactElement[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={[styles.star, i <= rating ? styles.starFilled : styles.starEmpty]}>
          ★
        </Text>
      );
    }
    return stars;
  };

  const renderFeedbackCard = (feedback: FeedbackItem) => (
    <Card key={feedback.id} style={styles.feedbackCard}>
      <View style={styles.feedbackContent}>
        <View style={styles.feedbackHeader}>
          <View style={styles.patientInfo}>
            <Text style={styles.patientAvatar}>{feedback.patientAvatar}</Text>
            <View style={styles.patientDetails}>
              <Text style={styles.patientName}>{feedback.patientName}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(feedback.rating)}
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreIcon}>→</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.feedbackComment}>{feedback.comment}</Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Feedback" 
        leftIcon="←"
        onLeftPress={() => console.log('Back pressed')}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Feedback</Text>
          
          <View style={styles.feedbackList}>
            {feedbacks.map(renderFeedbackCard)}
          </View>
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
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },
  feedbackList: {
    // List styling
  },
  feedbackCard: {
    marginBottom: 15,
  },
  feedbackContent: {
    // Content styling
  },
  feedbackHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  patientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  patientAvatar: {
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
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  starFilled: {
    color: '#FFD700',
  },
  starEmpty: {
    color: '#E9ECEF',
  },
  moreButton: {
    padding: 5,
  },
  moreIcon: {
    fontSize: 18,
    color: '#7F8C8D',
  },
  feedbackComment: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
  },
});

export default DoctorFeedbackScreen;