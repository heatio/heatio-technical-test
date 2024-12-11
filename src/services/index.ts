export const getAllTodos = async () => {
    return fetch('http://localhost:3005/all-todos').then(result => result.json())
};