"use client";
import React, { useState } from "react";
import { setTodoChecked } from "../lib/todos";

const todoChange = async (
  id: string | undefined,
  completed: boolean | undefined
) => setTodoChecked(id, completed);

const Checkbox = (props: {
  completed: boolean | undefined;
  id: string | undefined;
}) => {
  const [isCompleted, setisCompleted] = useState(props.completed);

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await todoChange(props.id, e.target.checked);
    setisCompleted(!isCompleted);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={changeHandler}
          className="checkbox"
        />
      </label>
    </div>
  );
};

export default Checkbox;
