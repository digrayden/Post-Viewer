import type { Todo } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const toDoApi = {
  getToDo: async (userId: string): Promise<Todo[]> => {
    const response = await fetch(`${API_URL}/users/${userId}/albums`);
    return response.json();
  },
};