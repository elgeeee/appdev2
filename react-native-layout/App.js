import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Login from './src/screens/Login.js';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login />
      <StatusBar />
    </SafeAreaView>
  )};