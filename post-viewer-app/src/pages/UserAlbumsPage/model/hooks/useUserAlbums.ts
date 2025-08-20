import { useGetAlbumsByUserIdQuery } from '../../../../entities/album/api/albumsApi';

export const useUserAlbums = (userId: string) => {
  const { data: albums, isLoading, error } = useGetAlbumsByUserIdQuery(userId);

  const errorMessage = error 
    ? typeof error === 'object' && 'message' in error 
      ? (error as { message: string }).message 
      : 'Unknown error'
    : null;

  return {
    albums: albums || [],
    isLoading,
    error: errorMessage,
  };
};