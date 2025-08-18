import type { Comment } from '../types'

const API_URL = 'https://jsonplaceholder.typicode.com';

export const postApi = {
    getComments: async (postId: number): Promise<Comment[]> => {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`);
    return response.json();
  },
};