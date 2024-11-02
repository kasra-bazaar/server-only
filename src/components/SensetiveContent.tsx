"use server-only";
import "server-only";

type Todo = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function SensetiveContent() {
  const todosData = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      return json as Todo[];
    });
  return (
    <section>
      <h1>Sensetive Content</h1>
      <p>HELLO , THIS PART WILL NOT SHOW UP ON THE FRONTEND</p>
      <div>
        {todosData?.map((todo: Todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
