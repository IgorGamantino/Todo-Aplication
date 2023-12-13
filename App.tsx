import {SafeAreaView, StyleSheet} from 'react-native';
import {Home} from './src/screens/Home';
import React from 'react';
export function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});
