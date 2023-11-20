"use client";
import React from "react";

const AddTodoButton = () => {
  const clickHandler = () => {
    const element = document.getElementById("my_modal_5");
    element?.classList.add("modal-open");
  };
  return (
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-circle" onClick={clickHandler}>
        +
      </button>
    </div>
  );
};

export default AddTodoButton;
