import React from "react";
import { Route, Routes } from "react-router";
import { Todo } from "../Components/Todo";
import { TodoList } from "../Components/TodoList";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/todolist"
        element={
          <PrivateRoute>
            <TodoList />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Todo />} />
    </Routes>
  );
};
