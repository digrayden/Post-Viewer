import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Album } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    getAlbumsByUserId: builder.query<Album[], string>({
      query: (userId) => `/users/${userId}/albums`,
      providesTags: (result, error, userId) => [
        { type: 'Album', userId },
        ...(result ? result.map(({ id }) => ({ type: 'Album' as const, id })) : []),
      ],
    }),
    getAlbumById: builder.query<Album, string>({
      query: (id) => `/albums/${id}`,
      providesTags: (result, error, id) => [{ type: 'Album', id }],
    }),
  }),
});

export const { useGetAlbumsByUserIdQuery, useGetAlbumByIdQuery } = albumsApi;