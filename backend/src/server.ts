import express from 'express';
const cors = require('cors'); // Using require instead of import to avoid TypeScript error

export const app = express();
const PORT = process.env.PORT || 3005;

const generateUniqueId = (): number => {
    if (todos.length === 0) return 1;
    const maxId = Math.max(...todos.map(todo => todo.id));
    return maxId + 1;
};

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());


export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

/**
 * Data
 */

export const todos = [
    { id: 1, title: 'Do the laundry', completed: false },
    { id: 2, title: 'Walk the dog', completed: false },
    { id: 3, title: 'Make dinner', completed: false },
]

/**
 * Routes
 */

// List of all the current to-do items
app.get('/all-todos', (req, res) => {
    
    res.send(todos);
});

// Add a new to-do item
app.post('/add-todo', (req, res) => {
    const { title } = req.body;
    const id = generateUniqueId();
    const newTodo = { id, title, completed: false };

    todos.push(newTodo);

    res.status(200).json(newTodo);
});

// Delete a to-do item
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === Number(id));

    if (todoIndex === -1) {
        res.status(404).send('Todo not found');
    } else {
        todos.splice(todoIndex, 1);
        res.status(200).send('Todo deleted');
    }
});

// Mark to-do as complete or incomplete
app.put('/toggle/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === Number(id));
        
    if (!todo) {
        res.status(404).send('Todo not found');
    } else {
        todo.completed = !todo.completed;
        res.status(200).send('Todo updated');
    }
});

/**
 * Server
 */

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
