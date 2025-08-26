import { useGetPostByIdQuery } from '../../../../entities/post/api/postsApi';

export const usePost = (id: string) => {
  const { data: post, isLoading, error } = useGetPostByIdQuery(id);

  const errorMessage = error 
    ? typeof error === 'object' && 'message' in error 
      ? (error as { message: string }).message 
      : 'Unknown error'
    : null;

  return {
    post: post || null,
    isLoading,
    error: errorMessage,
  };
};