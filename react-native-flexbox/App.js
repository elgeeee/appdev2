import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
// import Flex from './components/Flex.js';
import FlexDirectionBasics from './components/FlexDirection.js';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Flex /> */}
      <FlexDirectionBasics />
      <StatusBar />
    </SafeAreaView>
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
