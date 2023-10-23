import { createReducer, on } from '@ngrx/store';

import { setUser } from './user.actions';

import { User } from '@app/models';

const initialState: User = {
  token: '',
  id: '',
  name: ''
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }): User => ({ ...state, ...user }))
);
