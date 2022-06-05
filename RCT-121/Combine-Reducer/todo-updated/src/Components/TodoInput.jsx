import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../../../React-Redux/todo/src/Redux/action";
export const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  // const handleAdd = () => {
  //   dispatch({
  //     title: text,
  //     dispatch,
  //   });
  // };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <button onClick={handleAdd}>Add Todo</button> */}
    </div>
  );
};
