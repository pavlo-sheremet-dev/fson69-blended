import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from 'redux/operations';
import { useTodosState } from 'redux/selectors';

export const Todos = () => {
  const { todos, selectedTodo } = useTodosState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {selectedTodo ? <EditForm /> : <SearchForm />}
      {todos.length !== 0 ? (
        <Grid>
          {todos.map(({ id, value: todo }, idx) => (
            <GridItem key={id}>
              <Todo id={id} idx={idx} description={todo} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>There are no any todos</Text>
      )}
    </>
  );
};
