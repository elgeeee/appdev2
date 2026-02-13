import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
// import Flex from './components/Flex.js';
// import FlexDirectionBasics from './components/FlexDirection.js';
// import DirectionLayout from './components/LayoutDirection.js';
// import JustifyContentBasics from './components/JustifyContent.js';
import AlignItemsLayout from './components/AlignItems.js';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Flex /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <DirectionLayout /> */}
      {/* <JustifyContentBasics /> */}
      <AlignItemsLayout />
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
