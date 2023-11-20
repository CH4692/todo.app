"use client";

import React, { useState } from "react";
import { MdAddTask } from "react-icons/md";
import { createTodo } from "../lib/todos";

const Modal = () => {
  const [input, setInput] = useState("");
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const addTodo = async () => {
    const modal = document.getElementById("my_modal_5");
    if (input === "") {
      setTooltipIsOpen(true);
      modal?.classList.add("modal-open");
      return "";
    }
    console.log("Added Todo");
    console.log("input: " + input);
    modal?.classList.remove("modal-open");
    setInput("");
    setTooltipIsOpen(false);
    createTodo(input);
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_5");
    modal?.classList.remove("modal-open");
    setTooltipIsOpen(false);
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">New Todo</h3>
        <p className="py-4">Add a new Todo for the day!</p>
        <div className="modal-action flex flex-col items-center">
          <form action={addTodo} className="mt-5 flex flex-col gap-3 ">
            <div
              className={` ${
                tooltipIsOpen ? "tooltip tooltip-error tooltip-open" : ""
              } `}
              data-tip="Please enter a task"
            >
              <input
                type="text"
                placeholder="Type here"
                name="input"
                value={input}
                className="input input-bordered w-full max-w-xs block"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-3 mt-5 justify-center">
              <button type="submit" className="btn">
                Add <MdAddTask value={{ size: "50px" }} />
              </button>
              <button type="button" onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
