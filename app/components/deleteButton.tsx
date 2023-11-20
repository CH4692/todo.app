"use client";

import { useState } from "react";
import { deleteTodo } from "../lib/todos";

const DeleteButton = (props: { id: string | undefined }) => {
  const [loading, setLoading] = useState(false);

  const handleAction = async (formData: FormData) => {
    setLoading(true);
    console.log("Deleted Todo");
    const todo = await deleteTodo(props.id);
    console.log(todo);
    console.log(formData);
    setLoading(false);
  };
  return (
    <form action={handleAction}>
      {loading && <p>Loading...</p>}
      {!loading && (
        <button type="submit" className="btn btn-warning btn-xs">
          delete
        </button>
      )}
    </form>
  );
};

export default DeleteButton;
