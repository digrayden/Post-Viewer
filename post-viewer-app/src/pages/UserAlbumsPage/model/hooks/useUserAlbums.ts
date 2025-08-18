import { useState, useEffect } from 'react';
import type { Album } from '../types';
import { albumsApi } from '../api/albumsApi';

export const useUserAlbums = (userId: string) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAlbums = async () => {
      setIsLoading(true);
      try {        
        const data = await albumsApi.getAlbums(userId);
        setAlbums(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error');
      } finally {
        setIsLoading(false);
      }
    };

      fetchUserAlbums();
  }, [userId]);

  return { albums, isLoading, error };
};