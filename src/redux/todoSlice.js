import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    selectedTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload
        ? state.items.find(item => item.id === action.payload)
        : null;
    },
    editTodo: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const { addTodo, deleteTodo, toggleSelectedTodo, editTodo } =
  todoSlice.actions;
