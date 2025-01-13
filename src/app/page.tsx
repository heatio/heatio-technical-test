'use server';
import styles from "./page.module.css";
import Link from 'next/link';
import TodoList from './components/TodoList';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type Todos = Todo[];


export default async function Home() {
  const res = await fetch('http://127.0.0.1:3005/all-todos');
  const todos = await res.json();

  return (
    <div className={styles.container}>
      <h1  style={{ color: 'black' }}>TODOs</h1>

      <TodoList initialTodos={todos} />

      <button><Link href="/add" style={{ color: 'black' }}>Add new TODO</Link></button>
    </div>
  );
}
