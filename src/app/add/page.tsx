"use client"
import React, { ReactEventHandler } from 'react';
import { useRouter } from 'next/navigation'
import type { Todo } from '../page';



const Add = () => {
    const [title, setTitle] = React.useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3005/add-todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });

        if (res.ok) {
            setTitle('');
            router.push('/');
        }
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}


export default  Add;
