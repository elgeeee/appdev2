import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
// import Login from './src/screens/Login.js';
// import Signup from './src/screens/Signup.js';
import TodoScreen from './src/screens/Todo.js';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Login /> */}
      {/* <Signup /> */}
      <TodoScreen />
      <StatusBar />
    </SafeAreaView>
  )};