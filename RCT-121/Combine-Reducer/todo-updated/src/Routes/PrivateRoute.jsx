import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../Components/Todo";
import { TodoList } from "../Components/TodoList";

export const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth.auth);

  console.log(auth);
  return <div>{auth ? <TodoList /> : null}</div>;
  // return (
  //   <div>
  //     <TodoList />
  //   </div>
  // );
};
