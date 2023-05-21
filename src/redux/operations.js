import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://646a0ff903bb12ac2098f809.mockapi.io/api';

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (_, thunkApi) => {
    try {
      const response = await fetch(`${BASE_URL}/todos`);
      if (!response.ok) throw new Error('404');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (deleteId, thunkApi) => {
    try {
      const response = await fetch(`${BASE_URL}/todos/${deleteId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('404');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todo, thunkApi) => {
    try {
      const response = await fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        body: JSON.stringifytodo,
        headers: { 'content-type': 'application/json' },
      });
      if (!response.ok) throw new Error('404');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async (editedTodo, thunkApi) => {
    try {
      const response = await fetch(`${BASE_URL}/todos/${editedTodo.id}`, {
        method: 'PUT',
        body: JSON.stringify(editedTodo),
        headers: { 'content-type': 'application/json' },
      });
      if (!response.ok) throw new Error('404');
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
