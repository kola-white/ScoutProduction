import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PlatformColor } from 'react-native';

export default function LandingContent() {
  return (
    <View style={styles.overlay}>
      <Text style={styles.title}>Welcome to EV Fleet Manager</Text>
        <Text style={styles.primaryLabel}>I am Iron Man!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  primaryLabel: {
    color: PlatformColor('systemBlue'), // ✅ Apple: text label color
    fontSize: 38,
    fontWeight: '600',
  },
});
