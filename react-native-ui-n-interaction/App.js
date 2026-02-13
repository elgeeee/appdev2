import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import LotsOfStyles from './components/Style.js';
import FixedDimensionsBasics from './components/FixedDimensions.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LotsOfStyles /> */}
      <FixedDimensionsBasics />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
