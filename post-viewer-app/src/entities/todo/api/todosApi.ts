import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../model/types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodosByUserId: builder.query<Todo[], string>({
      query: (userId) => `/users/${userId}/todos`,
      providesTags: (result, error, userId) => [
        { type: 'Todo', userId },
        ...(result ? result.map(({ id }) => ({ type: 'Todo' as const, id })) : []),
      ],
    }),
  }),
});

export const { useGetTodosByUserIdQuery } = todosApi;