import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type {  EntityId  } from '@reduxjs/toolkit';
import type { Post } from '../types';
import type { RootState } from '../../../../app/providers/store/index';

const postsAdapter = createEntityAdapter<Post, EntityId>({
  selectId: (post) => post.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    postAdded: postsAdapter.addOne,
    postUpdated: postsAdapter.updateOne,
    postDeleted: postsAdapter.removeOne,
    postsReceived: (state, action) => {
      postsAdapter.setAll(state, action.payload);
    },
  },
});

export const { postAdded, postUpdated, postDeleted, postsReceived } = postSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: RootState) => state.posts);

export default postSlice.reducer;
