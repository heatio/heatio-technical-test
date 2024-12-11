import express, { Request, Response } from 'express';
import cors from 'cors';

export const app = express();
const PORT = process.env.PORT || 3005;

/**
 * Middleware
 */

app.use(express.json());
app.use(cors());

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
app.get('/all-todos', (req: Request, res: Response) => {
    res.send(todos);
});

// Add a to-do to the list
app.post('/add-todo', (req: Request, res: Response) => {})

// Mark to-do as complete or incomplete
app.put('/update-todo', (req: Request, res: Response) => {})

// Remove a to-do from the list
app.post('/remove-todo', (req: Request, res: Response) => {})


/**
 * Server
 */

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
