import React from "react";
import TodoContainer from "../components/TodoContainer";
import { useSelector } from "react-redux";
import todoSlice from "../redux/todoSlice";

const Header = () => {
  const mode = useSelector((store) => store.mode);
  return (
    <header
      className={
        (mode ? "bg-[url('./bg-img.jpg')] " : "bg-[url('./lbg-img.jpg')] ") +
        " bg-no-repeat bg-cover"
      }
    >
      <TodoContainer />
    </header>
  );
};

export default Header;
