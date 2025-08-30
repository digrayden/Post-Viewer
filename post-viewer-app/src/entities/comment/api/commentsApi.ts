import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Comment } from '../model/types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<Comment[], number>({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: (result, error, postId) => [
        { type: 'Comment', postId },
        ...(result ? result.map(({ id }) => ({ type: 'Comment' as const, id })) : []),
      ],
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;