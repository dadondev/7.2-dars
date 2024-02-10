import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "app",
  initialState: {
    mode: false,
    todos: [],
  },
  reducers: {
    mode: (state) => {
      state.mode = !state.mode;
      if (state.mode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
    sendTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    delTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id != payload);
    },
  },
});

export default todoSlice;
