import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodos, getTodos } from "../Redux/action";
export const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    addTodos({
      title: text,
      dispatch,
    }).then(getTodos(dispatch));
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Add New Todo"
        onChange={(e) => setText(e.target.value)}
        style={{ height: "25px" }}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
