import { useState, useEffect } from 'react';
import { postApi } from '../../../../widgets/PostList/model/api/postApi';
import type { Post } from '../../../../widgets/PostList/model/types';

export const usePost = (id: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const data = await postApi.getById(id);
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { post, isLoading, error };
};