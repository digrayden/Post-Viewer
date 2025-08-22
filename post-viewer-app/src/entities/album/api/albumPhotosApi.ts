import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Photo } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const albumsPhotoApi = createApi({
  reducerPath: 'albumsPhotoApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Photo'],
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query<Photo[], string>({
      query: (albumId) => `/albums/${albumId}/photos`,
      providesTags: (result, error, albumId) => [
        { type: 'Photo', albumId },
        ...(result ? result.map(({ id }) => ({ type: 'Photo' as const, id })) : []),
      ],
    }),
  }),
});

export const { useGetPhotosByAlbumIdQuery } = albumsPhotoApi;