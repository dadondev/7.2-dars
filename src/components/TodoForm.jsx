import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice from "../redux/todoSlice";

const TodoForm = () => {
  const inputRef = useRef();
  const checkRef = useRef();
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [comp, setComp] = useState(false);
  const handleChange = (value) => {
    setText(value);
  };
  const handleCheck = () => {
    setComp(checkRef.current.checked);
    console.log(comp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.ceil(Math.random() * 10000),
      text,
      completed: comp,
    };
    dispatch(todoSlice.actions.sendTodo(todo));
    inputRef.current.value = "";
    checkRef.current.checked = false;
  };

  return (
    <form
      className="w-full bg-white grid grid-cols-[40px_1fr] rounded-sm dark:bg-[rgba(37,39,61,1)] px-6 py-4 justify-center mb-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <p className="w-6 h-6  rounded-full overflow-hidden border-xl border-slate-50 inline-block">
          <input
            ref={checkRef}
            type="checkbox"
            className="w-6 h-6 cursor-pointer"
            onChange={handleCheck}
          />
        </p>
      </div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder="Create a new todo…"
        className="bg-inherit h-full dark:text-white placeholder:text-[rgba(148, 149, 165, 1)] dark:placeholder:text-[rgba(118,121,146,1)] focus:outline-none outline-none"
      />
    </form>
  );
};
export default TodoForm;
