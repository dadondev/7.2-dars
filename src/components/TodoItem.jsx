import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../redux/todoSlice";

const TodoItem = ({ props }) => {
  const dispatch = useDispatch();
  const { id, text, completed } = props;
  const handleDel = (id) => {
    dispatch(todoSlice.actions.delTodo(id));
  };
  useEffect(() => {
    if (completed) {
      checkboxRef.current.checked = completed;
    }
  }, []);
  const checkboxRef = useRef();

  return (
    <div className="relative w-full grid todo-item grid-cols-[40px_1fr] border-b border-slate-50 justify-center rounded-sm dark:bg-[rgba(37,39,61,1)] px-6 py-4">
      <div>
        <p className="w-6 h-6  rounded-full  overflow-hidden border-xl border-slate-50 inline-block">
          <input
            ref={checkboxRef}
            type="checkbox"
            id="check"
            className="w-6 h-6 cursor-pointer"
          />
        </p>
      </div>
      <label for="check" className="cursor-pointer dark:text-white">
        {text}
      </label>
      <svg
        onClick={() => handleDel(id)}
        width="20"
        height="20"
        className="absolute top-1/2 -translate-y-1/2 right-6 visibled "
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
          fill="#5B5E7E"
        />
      </svg>
    </div>
  );
};

export default TodoItem;
