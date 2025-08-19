import { useState, useEffect } from 'react';
import type { Todo } from '../types';
import { toDoApi } from '../api/userTodosApi';

export const useUserToDo = (userId: string) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserTodos = async () => {
      setIsLoading(true);
      try {        
        const data = await toDoApi.getToDo(userId);
        setTodos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

      fetchUserTodos();
  }, [userId]);

  return { todos, isLoading, error };
};