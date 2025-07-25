import { StatusBar } from 'expo-status-bar';
import { PlatformColor, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingScreen from './src/screens/LandingScreen';

export default function App() {
  return (
  <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LandingScreen />
    </View>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PlatformColor('systemIndigo'), 
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
