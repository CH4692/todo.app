"use server";

import prisma from "../db";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const getTodos = cache(async () => {
  const todos = await prisma.todos.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log("Fetched All Todos");
  return todos;
});

export const createTodo = cache(async (title: string | undefined) => {
  const todos = await prisma.todos.create({
    data: {
      title: title as string,
      completed: false,
    },
  });
  console.log("Created Todo");
  revalidatePath("/");
});

export const deleteTodo = cache(async (id: string | undefined) => {
  const todos = await prisma.todos.delete({
    where: {
      id: id,
    },
  });
  console.log("Deleted Todo");
  revalidatePath("/");
});

export const setTodoChecked = cache(
  async (id: string | undefined, completed: boolean | undefined) => {
    const updatedTodo = await prisma.todos.update({
      where: {
        id: id,
      },
      data: {
        completed: completed,
      },
    });

    console.log("Updated Data:");
    revalidatePath("/");
    return updatedTodo;
  }
);
