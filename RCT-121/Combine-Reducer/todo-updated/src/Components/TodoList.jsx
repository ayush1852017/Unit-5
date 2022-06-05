import React from "react";
import { useSelector } from "react-redux";
export const TodoList = () => {
  const todos = useSelector((state) => state?.todo.todo);
  const loading = useSelector((state) => state.todo.loading);
  console.log(todos);
  return (
    <div>
      {loading && <div>loading...</div>}
      <h2>Todo List</h2>
      {todos &&
        todos?.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: ".5rem",
              }}
            >
              <div>{item.id}.</div>
              <div>{item.title}</div>
            </div>
          );
        })}
    </div>
  );
};
