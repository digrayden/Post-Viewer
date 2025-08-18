import { useState, useEffect } from 'react';
import type { Photo } from '../types';
import { albumsPhotoApi } from '../api/albumPhotosApi'

export const useAlbumPhotos = (albumId: string) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbumPhotos = async () => {
      setIsLoading(true);
      try {
        const data = await albumsPhotoApi.getAlbumsPhoto(albumId);
        setPhotos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

      fetchAlbumPhotos();
  }, [albumId]);

  return { photos, isLoading, error };
};