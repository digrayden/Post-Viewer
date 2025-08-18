import { useState, useEffect } from 'react';
import { postApi } from '../../../../widgets/PostList/model/api/postApi';
import type { Post } from '../../../../widgets/PostList/model/types';

export const useUserPosts = (userId: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      setIsLoading(true);
      try {
        const data = await postApi.getByUserId(userId);
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserPosts();
  }, [userId]);

  return { posts, isLoading, error };
};