import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};
export function useHomeHook() {
  const [todo, setTodo] = useState<string>('');
  const [listTodo, setListTodo] = useState<TodoProps[]>([]);

  useEffect(() => {
    async function getData() {
      const listTdo = await AsyncStorage.getItem('listTodo');

      if (listTdo) {
        setListTodo(JSON.parse(listTdo));
      }
    }

    getData();
  }, [listTodo]);

  const handleCreatedTodo = async (todotext: string) => {
    const todoCreated: TodoProps = {
      id: Math.random(),
      title: todotext,
      completed: false,
    };

    const listTodoCreated = [...listTodo, todoCreated];
    await AsyncStorage.setItem('listTodo', JSON.stringify(listTodoCreated));
    setListTodo(listTodoCreated);
    setTodo('');
  };

  const handleCompletedTask = async (id: number) => {
    const findTodo = listTodo.find(todo => todo.id === id);

    if (findTodo) {
      findTodo.completed = !findTodo.completed;
      setListTodo([...listTodo]);
      await AsyncStorage.setItem('listTodo', JSON.stringify(listTodo));
    }
  };

  const handleDeleteTodo = async (id: number) => {
    const findTodo = listTodo.filter(todo => todo.id !== id);

    setListTodo([...findTodo]);
    await AsyncStorage.setItem('listTodo', JSON.stringify(findTodo));
  };

  const counterTodoCompleted = listTodo.filter(todo => todo.completed).length;

  return {
    todo,
    setTodo,
    handleCreatedTodo,
    listTodo,
    setListTodo,
    handleCompletedTask,
    counterTodoCompleted,
    handleDeleteTodo,
  };
}
