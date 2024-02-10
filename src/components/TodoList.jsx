import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import todoSlice from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((todos) => todos.todos);
  useEffect(() => {
    todos;
  }, [todos]);
  return (
    <div className="w-full bg-white dark:bg-[rgba(37,39,61,1)] rounded-sm">
      {todos && todos.map((todo, i) => <TodoItem props={todo} key={i} />)}
    </div>
  );
};

export default TodoList;
