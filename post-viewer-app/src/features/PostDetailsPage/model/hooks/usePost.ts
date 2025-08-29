import { useGetPostByIdQuery } from '../../../../entities/post/api/postsApi';
import { useAppSelector } from '../../../../shared/lib/hooks/useAppSelector';
import { selectPostById } from '../../../../entities/post/model/slice/postSlice';

export const usePost = (id: string) => {
  const { isLoading, error } = useGetPostByIdQuery(id);
  const post = useAppSelector(state => selectPostById(state, parseInt(id)));

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