import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../theme/colors';

const FeedbackScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Feedback</Text>
        {/* Add your feedback content here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark,
    padding: 20,
  },
});

export default FeedbackScreen;