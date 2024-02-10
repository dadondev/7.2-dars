import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoMain = () => {
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
};

export default TodoMain;
