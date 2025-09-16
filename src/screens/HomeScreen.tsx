import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Colors } from '../theme/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ayusutra</Text>
        <TouchableOpacity>
          <Text>Profile Icon</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for patients..."
          placeholderTextColor={Colors.gray}
        />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Schedule</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.appointmentCount}>
            You have 5 appointments today.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {/* Appointment cards would go here */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Actions</Text>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>Review 3 new lab reports</Text>
            <TouchableOpacity style={styles.reviewButton}>
              <Text style={styles.reviewButtonText}>Review</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  searchContainer: {
    padding: 20,
    backgroundColor: Colors.white,
  },
  searchInput: {
    backgroundColor: Colors.background,
    padding: 12,
    borderRadius: 8,
    color: Colors.dark,
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: Colors.white,
    padding: 20,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark,
  },
  viewAll: {
    color: Colors.primary,
  },
  appointmentCount: {
    fontSize: 16,
    color: Colors.gray,
  },
  actionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  actionText: {
    fontSize: 14,
    color: Colors.dark,
  },
  reviewButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  reviewButtonText: {
    color: Colors.white,
    fontWeight: '500',
  },
});

export default HomeScreen;