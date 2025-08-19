import type { Post } from '../types'

const API_URL = 'https://jsonplaceholder.typicode.com';

export const postApi = {
  getAll: async (): Promise<Post[]> => {
    const response = await fetch(`${API_URL}/posts`);
    return response.json();
  },
  getById: async (id: string): Promise<Post> => {
    const response = await fetch(`${API_URL}/posts/${id}`);
    return response.json();
  },
  getByUserId: async (userId: string): Promise<Post[]> => {
    const response = await fetch(`${API_URL}/users/${userId}/posts`);
    return response.json();
  },
};