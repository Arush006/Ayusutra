import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../theme/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Profile</Text>
        {/* Add your profile content here */}
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

export default ProfileScreen;