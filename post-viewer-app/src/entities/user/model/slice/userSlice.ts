import { createEntityAdapter, createSlice  } from '@reduxjs/toolkit';
import type {  EntityId  } from '@reduxjs/toolkit';
import type { User } from '../types';
import type { RootState } from '../../../../app/providers/store';

const usersAdapter = createEntityAdapter<User, EntityId>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const userSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    userAdded: usersAdapter.addOne,
    userUpdated: usersAdapter.updateOne,
    userDeleted: usersAdapter.removeOne,
    usersReceived: (state, action) => {
      usersAdapter.setAll(state, action.payload);
    },
  },
});

export const { userAdded, userUpdated, userDeleted, usersReceived } = userSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default userSlice.reducer;
