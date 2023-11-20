"use client";

import React from "react";
import Todo from "./todo";
import { TodoType } from "../page";

export default function TodoList(props: { todos: TodoType[] }) {
  return (
    <div className="card mt-14">
      <div className="card-body flex-col flex items-center justify-center">
        {props.todos &&
          props.todos.map((todo) => (
            <Todo
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
            />
          ))}
        {props.todos.length == 0 ? (
          <Todo
            key={undefined}
            title="No Todos. Create one"
            completed={undefined}
            id={undefined}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
