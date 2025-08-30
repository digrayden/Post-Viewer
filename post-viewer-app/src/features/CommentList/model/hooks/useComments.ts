import { useGetCommentsByPostIdQuery } from '../../../../entities/comment/api/commentsApi';

export const useComments = (postId: number) => {
  const { data: comments, isLoading, error } = useGetCommentsByPostIdQuery(postId);

  const errorMessage = error 
    ? typeof error === 'object' && 'message' in error 
      ? (error as { message: string }).message 
      : 'Unknown error'
    : null;

  return {
    comments: comments || [],
    isLoading,
    error: errorMessage,
  };
};