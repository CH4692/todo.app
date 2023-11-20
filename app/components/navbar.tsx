"use client";

import React, { useState } from "react";
import AddTodoButton from "./addTodoButton";
import TodoList from "./todoList";
import { TodoType } from "../page";

const Navbar = (props: { todos: TodoType[] }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const filteredResults = (array: TodoType[]) => {
    return array.filter((el) =>
      el.title?.toLowerCase().includes(input.toLowerCase())
    );
  };

  const filtered = filteredResults(props.todos);

  return (
    <>
      <div className="navbar pt-5 z-10 bg-base-100 items-center flex justify-between fixed">
        <div className="flex-1 ml-8 justify-start gap-5 ">
          <AddTodoButton />
          <input
            type="checkbox"
            value="light"
            className="toggle theme-controller"
          />
        </div>
        <div className="flex-1 justify-center form-control">
          <h1 className="card-title ">Todo App</h1>
        </div>
        <div className="flex-1 mr-5 justify-center">
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={handleChange}
            className="input input-bordered w-full md:w-auto"
          />
        </div>
      </div>
      <TodoList todos={filtered} />
    </>
  );
};

export default Navbar;
