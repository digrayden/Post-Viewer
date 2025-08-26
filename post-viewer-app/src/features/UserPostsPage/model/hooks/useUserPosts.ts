import { useGetPostsByUserIdQuery } from '../../../../entities/post/api/postsApi';

export const useUserPosts = (userId: string) => {
  const { data: posts, isLoading, error } = useGetPostsByUserIdQuery(userId);

  const errorMessage = error 
    ? typeof error === 'object' && 'message' in error 
      ? (error as { message: string }).message 
      : 'Unknown error'
    : null;

  return {
    posts: posts || [],
    isLoading,
    error: errorMessage,
  };
};