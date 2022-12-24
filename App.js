import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//
import MemberNavigator from './navigators/MemberNavigator';
import MembersScreen from './screens/MembersScreen';
//
export default function App() {
  return (
    <View style={styles.container}>
      <MemberNavigator />
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
