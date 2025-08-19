import type { Album } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const albumsApi = {
  getAlbums: async (userId: string): Promise<Album[]> => {
    const response = await fetch(`${API_URL}/users/${userId}/albums`);
    return response.json();
  },
};