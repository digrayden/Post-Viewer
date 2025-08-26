import { useGetPhotosByAlbumIdQuery } from '../../../../entities/album/api/albumPhotosApi';

export const useAlbumPhotos = (albumId: string) => {
  const { data: photos, isLoading, error } = useGetPhotosByAlbumIdQuery(albumId);

  const errorMessage = error 
    ? typeof error === 'object' && 'message' in error 
      ? (error as { message: string }).message 
      : 'Unknown error'
    : null;

  return {
    photos: photos || [],
    isLoading,
    error: errorMessage,
  };
};