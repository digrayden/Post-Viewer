import type { Photo } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const albumsPhotoApi = {
  getAlbumsPhoto: async (albumId: string): Promise<Photo[]> => {
    const response = await fetch(`${API_URL}/albums/${albumId}/photos`);
    return response.json();
  },
};