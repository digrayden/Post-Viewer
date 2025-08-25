import { useGetPostsQuery } from '../../../../entities/post/api/postsApi';

export const usePosts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

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