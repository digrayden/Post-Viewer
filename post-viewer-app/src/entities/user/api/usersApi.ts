import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../model/types';
import { usersReceived, userAdded } from '../model/slice/userSlice';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(usersReceived(data));
        } catch (error) {
          console.error('Failed to fetch users:', error);
        }
      },
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userAdded(data));
        } catch (error) {
          console.error(`Failed to fetch user ${arg}:`, error);
        }
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;