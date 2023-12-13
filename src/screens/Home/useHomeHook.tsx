import {useState} from 'react';

type TodoProps = {
  title: string;
  completed: boolean;
};
export function useHomeHook() {
  const [todo, setTodo] = useState<string>();
  const [listTodo, setListTodo] = useState<TodoProps[]>([]);

  const handleCreatedTodo = (todotext: string) => {
    const todoCreated: TodoProps = {
      title: todotext,
      completed: false,
    };

    setListTodo([...listTodo, todoCreated]);
    setTodo(undefined);
  };

  return {
    todo,
    setTodo,
    handleCreatedTodo,
    listTodo,
    setListTodo,
  };
}
