import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';

const VoiceBotScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Voice Assistant" 
        leftIcon="←"
        onLeftPress={() => console.log('Back pressed')}
      />

      <View style={styles.content}>
        <Card style={styles.voiceBotCard}>
          <View style={styles.voiceBotContainer}>
            <Text style={styles.voiceBotIcon}>🎤</Text>
            <Text style={styles.voiceBotTitle}>Voice Assistant</Text>
            <Text style={styles.voiceBotDescription}>
              Ask me anything about your appointments, health queries, or navigate through the app using voice commands.
            </Text>
            
            <TouchableOpacity style={styles.micButton}>
              <Text style={styles.micIcon}>🎙️</Text>
              <Text style={styles.micText}>Tap to speak</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card style={styles.suggestionsCard}>
          <Text style={styles.suggestionsTitle}>Try saying:</Text>
          <View style={styles.suggestionsList}>
            <Text style={styles.suggestionItem}>• "Show me my next appointment"</Text>
            <Text style={styles.suggestionItem}>• "Book a session with Dr. Sharma"</Text>
            <Text style={styles.suggestionItem}>• "What are my notifications?"</Text>
            <Text style={styles.suggestionItem}>• "Navigate to feedback"</Text>
          </View>
        </Card>
      </View>
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
    paddingVertical: 20,
  },
  voiceBotCard: {
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 20,
  },
  voiceBotContainer: {
    alignItems: 'center',
  },
  voiceBotIcon: {
    fontSize: 48,
    marginBottom: 20,
  },
  voiceBotTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
  },
  voiceBotDescription: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  micButton: {
    backgroundColor: '#00BFA5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  micIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  micText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  suggestionsCard: {
    paddingVertical: 20,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 15,
  },
  suggestionsList: {
    // List styling
  },
  suggestionItem: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default VoiceBotScreen;