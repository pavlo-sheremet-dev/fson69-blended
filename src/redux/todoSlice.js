import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getTodos, deleteTodo, addTodo, editTodo } from './operations';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    selectedTodo: null,
    isLoading: false,
    err: null,
  },
  reducers: {
    toggleSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload
        ? state.items.find(item => item.id === action.payload)
        : null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload.id);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRej)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});

const handlePending = (state, action) => {
  state.isLoading = true;
  state.err = null;
};

const handleRej = (state, action) => {
  state.isLoading = false;
  state.err = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const extraActions = [getTodos, addTodo, deleteTodo, editTodo];

const getActions = type => extraActions.map(action => action[type]);

export const { toggleSelectedTodo } = todoSlice.actions;
