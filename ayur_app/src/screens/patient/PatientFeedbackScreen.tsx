import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  avatar: string;
}

const PatientFeedbackScreen: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Mock data - will be replaced with API calls
  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Emily Carter',
      specialization: 'Cardiologist',
      avatar: '👩‍⚕️',
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialization: 'Pediatrician',
      avatar: '👨‍⚕️',
    },
    {
      id: '3',
      name: 'Dr. Sarah Jones',
      specialization: 'Neurologist',
      avatar: '👩‍⚕️',
    },
  ];

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowFeedbackModal(true);
    setRating(0);
    setComment('');
  };

  const handleSubmitFeedback = () => {
    if (rating === 0) {
      Alert.alert('Rating Required', 'Please provide a rating before submitting.');
      return;
    }

    // Mock API call - replace with actual implementation
    console.log('Submitting feedback:', {
      doctorId: selectedDoctor?.id,
      rating,
      comment,
    });

    Alert.alert('Success', 'Thank you for your feedback!');
    setShowFeedbackModal(false);
    setSelectedDoctor(null);
    setRating(0);
    setComment('');
  };

  const renderStars = () => {
    const stars: React.ReactElement[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Text style={[styles.star, i <= rating ? styles.starFilled : styles.starEmpty]}>
            ★
          </Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };

  const renderDoctorCard = (doctor: Doctor) => (
    <Card key={doctor.id} style={styles.doctorCard} onPress={() => handleDoctorSelect(doctor)}>
      <View style={styles.doctorContent}>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorAvatar}>{doctor.avatar}</Text>
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.specialization}>{doctor.specialization}</Text>
          </View>
        </View>
        <Text style={styles.arrowIcon}>→</Text>
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
          <Text style={styles.sectionTitle}>Select Doctor to Provide Feedback</Text>
          
          <View style={styles.doctorsList}>
            {doctors.map(renderDoctorCard)}
          </View>
        </View>
      </ScrollView>

      {/* Feedback Modal */}
      <Modal
        visible={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        title={`Feedback for ${selectedDoctor?.name}`}
      >
        <View style={styles.feedbackForm}>
          <View style={styles.ratingSection}>
            <Text style={styles.ratingLabel}>Rating</Text>
            <View style={styles.starsContainer}>
              {renderStars()}
            </View>
          </View>

          <View style={styles.commentSection}>
            <Text style={styles.commentLabel}>Comments (Optional)</Text>
            <TextInput
              style={styles.commentInput}
              placeholder="Write your feedback here..."
              value={comment}
              onChangeText={setComment}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholderTextColor="#BDC3C7"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Submit Feedback"
              onPress={handleSubmitFeedback}
              variant="primary"
              style={styles.submitButton}
            />
          </View>
        </View>
      </Modal>
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
  doctorsList: {
    // List styling
  },
  doctorCard: {
    marginBottom: 15,
  },
  doctorContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  doctorAvatar: {
    fontSize: 24,
    marginRight: 15,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  specialization: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#7F8C8D',
  },
  feedbackForm: {
    // Form styling
  },
  ratingSection: {
    marginBottom: 25,
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 32,
    marginRight: 5,
  },
  starFilled: {
    color: '#FFD700',
  },
  starEmpty: {
    color: '#E9ECEF',
  },
  commentSection: {
    marginBottom: 25,
  },
  commentLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
  },
  commentInput: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#2C3E50',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    minHeight: 100,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  submitButton: {
    width: '100%',
  },
});

export default PatientFeedbackScreen;