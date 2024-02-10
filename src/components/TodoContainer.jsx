import React from "react";
import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";

const TodoContainer = () => {
  return (
    <div className="max-w-[327px] md:max-w-[540px] mx-auto absolute top-16 left-1/2 -translate-x-2/4 w-full">
      <TodoHeader />
      <TodoMain />
    </div>
  );
};

export default TodoContainer;
