import { useGetPostsByUserIdQuery } from '../../../../entities/post/api/postsApi';
import { useAppSelector } from '../../../../shared/lib/hooks/useAppSelector';
import { selectAllPosts } from '../../../../entities/post/model/slice/postSlice';

export const useUserPosts = (userId: string) => {
  const { isLoading, error } = useGetPostsByUserIdQuery(userId);
  const allPosts = useAppSelector(selectAllPosts);
  const posts = allPosts.filter(post => post.userId === parseInt(userId));

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