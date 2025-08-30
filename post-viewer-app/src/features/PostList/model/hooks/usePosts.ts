import { useGetPostsQuery } from '../../../../entities/post/api/postsApi';
import { useAppSelector } from '../../../../shared/lib/hooks/useAppSelector';
import { selectAllPosts } from '../../../../entities/post/model/slice/postSlice';

export const usePosts = () => {
  const { isLoading, error } = useGetPostsQuery();
  const posts = useAppSelector(selectAllPosts);

  const errorMessage = error 
    ? typeof error === 'object' && 'message' in error 
      ? (error as { message: string }).message 
      : 'Unknown error'
    : null;

  return {
    posts,
    isLoading,
    error: errorMessage,
  };
};