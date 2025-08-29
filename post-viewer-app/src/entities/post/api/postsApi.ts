import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../model/types';
import { postsReceived, postAdded } from '../model/slice/postSlice';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      providesTags: ['Post'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(postsReceived(data));
        } catch (error) {
          console.error('Failed to fetch posts:', error);
        }
      },
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(postAdded(data));
        } catch (error) {
          console.error(`Failed to fetch post ${arg}:`, error);
        }
      },
    }),
    getPostsByUserId: builder.query<Post[], string>({
      query: (userId) => `/users/${userId}/posts`,
      providesTags: (result, error, userId) => [
        { type: 'Post', userId },
        ...(result ? result.map(({ id }) => ({ type: 'Post' as const, id })) : []),
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          data.forEach(post => dispatch(postAdded(post)));
        } catch (error) {
          console.error(`Failed to fetch posts for user ${arg}:`, error);
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
} = postsApi;