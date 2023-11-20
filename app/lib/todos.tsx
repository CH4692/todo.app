"use server";

import prisma from "../db";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
  const todos = await prisma.todos.findMany({
    orderBy: {
      id: "desc",
    },
  });
  revalidatePath("/");
  return todos;
};

export const createTodo = async (title: string | undefined) => {
  const todos = await prisma.todos.create({
    data: {
      title: title as string,
      completed: false,
    },
  });
  console.log("Created Data:");
  console.log(todos);
  revalidatePath("/");
};

export const deleteTodo = async (id: string | undefined) => {
  const todos = await prisma.todos.delete({
    where: {
      id: id,
    },
  });
  console.log(todos);
  revalidatePath("/");
};

export const setTodoChecked = async (
  id: string | undefined,
  completed: boolean | undefined
) => {
  const updatedTodo = await prisma.todos.update({
    where: {
      id: id,
    },
    data: {
      completed: completed,
    },
  });

  console.log(updatedTodo);
  revalidatePath("/");
  return updatedTodo;
};
