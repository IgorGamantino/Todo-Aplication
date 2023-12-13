import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Logo from '../assets/Logo.svg';
import Plus from '../assets/plus.svg';
export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo height={32} />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Plus />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 174,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapperInput: {
    flexDirection: 'row',
  },
  input: {
    position: 'relative',
    top: -20,
    left: 10,
    right: 0,
    width: 271,
    backgroundColor: 'white',
    borderRadius: 6,
  },

  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    marginLeft: 10,
    position: 'relative',
    top: -20,
    left: 5,
    right: 0,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
