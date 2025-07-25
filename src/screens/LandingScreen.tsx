// src/screens/LandingScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LandingContent from '../components/LandingContent';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <LandingContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', // or keep transparent if using video later
  },
});
