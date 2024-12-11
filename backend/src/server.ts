import express from 'express';

export const app = express();
const PORT = process.env.PORT || 3005;

/**
 * Middleware
 */

app.use(express.json());

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

// Mark to-do as complete or incomplete
// ...

/**
 * Server
 */

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

