import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../../../React-Redux/todo/src/Redux/action";
import { TodoInput } from "./TodoInput";
import { Link } from "react-router-dom";

export const Todo = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   getTodos(dispatch);
  // }, []);

  console.log(getTodos(dispatch));
  return (
    <div>
      <TodoInput />
      <Link to="/todolist">
        <button>Show Todo List</button>
      </Link>
    </div>
  );
};
