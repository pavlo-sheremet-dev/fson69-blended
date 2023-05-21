import { useSelector } from 'react-redux';

export const useTodosState = () => {
  const todos = useSelector(state => state.todos.items);
  const selectedTodo = useSelector(state => state.todos.selectedTodo);

  return { todos, selectedTodo };
};
