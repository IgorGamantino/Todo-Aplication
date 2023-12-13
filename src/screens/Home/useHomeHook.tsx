import {useState} from 'react';

type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};
export function useHomeHook() {
  const [todo, setTodo] = useState<string>('');
  const [listTodo, setListTodo] = useState<TodoProps[]>([]);

  const handleCreatedTodo = (todotext: string) => {
    const todoCreated: TodoProps = {
      id: Math.random(),
      title: todotext,
      completed: false,
    };

    setListTodo([...listTodo, todoCreated]);
    setTodo('');
  };

  const handleCompletedTask = (id: number) => {
    const findTodo = listTodo.find(todo => todo.id === id);

    if (findTodo) {
      findTodo.completed = !findTodo.completed;
      setListTodo([...listTodo]);
    }
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
  };
}
