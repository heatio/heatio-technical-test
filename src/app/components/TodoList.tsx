'use client';
import { useState } from 'react';

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

interface TodoListProps {
    initialTodos: Todo[];
}

export default function TodoList({ initialTodos }: TodoListProps) {
    const [todos, setTodos] = useState(initialTodos);

    const deleteTodo = async (id: number) => {
        try {
            const res = await fetch(`http://127.0.0.1:3005/delete/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                window.location.reload();
            }
        } catch (error) {
            console.error('Failed to delete todo:', error);
        }
    };

    const toggleTodo = async (id: number) => {
        try {
            const res = await fetch(`http://127.0.0.1:3005/toggle/${id}`, {
                method: 'PUT',
            });

            if (!res.ok) {
                throw new Error('Failed to update todo');
            } else {
                window.location.reload();
            }
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    return (
        <ul>
            {todos.map((todo: Todo) => (
                <li
                    key={todo.id}
                    style={{ color: 'black' }}
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <span>{todo.title}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
