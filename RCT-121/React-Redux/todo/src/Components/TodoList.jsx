import React from "react";
import { useSelector } from "react-redux";
export const TodoList = () => {
  const todos = useSelector((state) => state?.todo);
  const loading = useSelector((state) => state?.loading);
  console.log(loading);
  return (
    <div>
      <h3>Todos</h3>
      {loading && <div>loading...</div>}
      {todos?.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>{item.id}.</div>
            <div>{item.title}</div>
            <div>{item.status}</div>
          </div>
        );
      })}
    </div>
  );
};
