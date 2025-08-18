import { useState, useEffect } from 'react';
import { postApi } from '../api/commentsApi';
import type { Comment } from '../types';

export const useComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const data = await postApi.getComments(postId);
        setComments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  return { comments, isLoading, error };
};