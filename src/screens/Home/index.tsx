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
import Trash from '../../assets/trash.svg';
import {useHomeHook} from './useHomeHook';
import {Check} from '../../components/check';
export function Home() {
  const {
    todo,
    setTodo,
    handleCreatedTodo,
    listTodo,
    handleCompletedTask,
    counterTodoCompleted,
    handleDeleteTodo,
  } = useHomeHook();

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
        <View style={styles.wrapperCounter}>
          <Text style={styles.textCreate}>Criadas</Text>
          <Text style={styles.counterTodo}>{listTodo.length}</Text>
        </View>

        <View style={styles.wrapperCounter}>
          <Text style={styles.textFinish}>Concluídas</Text>
          <Text style={styles.counterTodo}>{counterTodoCompleted}</Text>
        </View>
      </View>

      <View style={styles.wrapperListTodo}>
        {listTodo.map(todo => (
          <View style={[styles.wrapperCounter, styles.containerTodo]}>
            <Check
              isChecked={todo.completed}
              onPress={() => handleCompletedTask(todo.id)}
            />
            <Text style={styles.textTodo} key={todo.id}>
              {todo.title}
            </Text>

            <TouchableOpacity
              style={styles.trash}
              onPress={() => handleDeleteTodo(todo.id)}>
              <Trash />
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 24,

    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#333',
  },

  textCreate: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700',
  },

  containerTodo: {
    height: 64,

    width: '100%',
    borderRadius: 8,
    backgroundColor: '#262626',
    marginBottom: 8,
    alignItems: 'center',
    padding: 12,
  },

  wrapperCounter: {
    // marginTop: 10,
    flexDirection: 'row',
  },

  counterTodo: {
    color: 'white',
    marginLeft: 4,
    borderRadius: 999,
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    fontSize: 12,
    paddingVertical: 2,
  },

  wrapperListTodo: {
    width: '100%',
    paddingHorizontal: 24,
    alignContent: 'center',
    alignItems: 'center',
  },

  textFinish: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: '700',
  },

  textTodo: {
    color: '#FFF',
    marginLeft: 8,
    fontSize: 15,
  },

  trash: {
    position: 'absolute',
    right: 16,
  },
});
