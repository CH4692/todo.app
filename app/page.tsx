import Navbar from "./components/navbar";
import Modal from "./components/modal";
import { getTodos } from "./lib/todos";

export type TodoType = {
  id: string | undefined;
  title: string | undefined;
  completed: boolean | undefined;
};

export default async function Home() {
  const todos: TodoType[] = await getTodos();
  console.log(todos);

  return (
    <main className=" flex flex-col h-full ">
      <Modal />
      <Navbar todos={todos} />
    </main>
  );
}

export const dynamic = "force-dynamic";
