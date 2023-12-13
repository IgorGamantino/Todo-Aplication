import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Logo from '../../assets/Logo.svg';
import Plus from '../../assets/plus.svg';
import {useHomeHook} from './useHomeHook';
export function Home() {
  const {todo, setTodo, handleCreatedTodo, listTodo} = useHomeHook();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo height={32} />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          onChangeText={t => setTodo(t)}
          value={todo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCreatedTodo(todo)}>
          <Plus />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapperText}>
        <Text style={styles.textCreate}>Criadas</Text>
        <Text style={styles.textFinish}>Concluídas</Text>
      </View>

      <View>
        {listTodo.map((t, index) => (
          <Text style={styles.textTodo} key={index}>
            {t.title}
          </Text>
        ))}
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
    left: 24,
    right: 0,
    width: 300,
    backgroundColor: '#262626',
    color: '#Ffff',
    borderWidth: 1,
    borderColor: '#0D0D0D',
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

  wrapperText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 24,
    paddingLeft: 24,

    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#333',
  },

  textCreate: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700',
  },

  textFinish: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: '700',
  },

  textTodo: {
    color: '#FFF',
  },
});
