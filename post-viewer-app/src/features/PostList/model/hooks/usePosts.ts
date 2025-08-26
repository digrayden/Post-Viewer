import { useGetPostsQuery } from '../../../../entities/post/api/postsApi';
import type { Post } from '../../../../entities/post/model/types';

interface UsePostsResult {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

export const usePosts = (): UsePostsResult => {
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