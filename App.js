import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//
import RootNavigator from './navigators/RootNavigator';
//
export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
