import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView  } from 'react-native';
// import LotsOfStyles from './components/Style.js';
// import FixedDimensionsBasics from './components/FixedDimensions.js';
// import FlexDimensionsBasics from './components/FlexDimensions.js';
import PercentageDimensionsBasics from './components/PercentageDimensions.js';

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <LotsOfStyles /> */}
    //   {/* <FixedDimensionsBasics /> */}
    //   <FlexDimensionsBasics />
    //   <StatusBar />
    // </View>

    <SafeAreaView style={{flex: 1}}>
      {/* <FlexDimensionsBasics/> */}
      <PercentageDimensionsBasics />
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
