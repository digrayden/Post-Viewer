import { useGetTodosByUserIdQuery } from '../../../../entities/todo/api/todosApi';

export const useUserToDo = (userId: string) => {
  const { data: todos, isLoading, error } = useGetTodosByUserIdQuery(userId);

  const errorMessage = error 
    ? typeof error === 'object' && 'message' in error 
      ? (error as { message: string }).message 
      : 'Unknown error'
    : null;

  return {
    todos: todos || [],
    isLoading,
    error: errorMessage,
  };
};