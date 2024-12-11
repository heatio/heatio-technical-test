import request from 'supertest';
import {app, todos} from "./server";


describe('Server Tests', () => {
    it('should respond with to-dos on GET /all-todos', async () => {
        const response = await request(app).get('/all-todos');
        expect(response.status).toBe(200);
        expect(response.text).toBe(JSON.stringify(todos));
    });

    // Additional tests can go here
});
