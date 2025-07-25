import { StatusBar } from 'expo-status-bar';
import { PlatformColor, StyleSheet, Text, View } from 'react-native';
import './src/styles/global.css'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.primaryLabel}>I am Iron Man!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PlatformColor('systemIndigo'), // ✅ dynamic background on iPhone
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryLabel: {
    color: PlatformColor('label'), // ✅ Apple: text label color
    fontSize: 38,
    fontWeight: '600',
  },
});
