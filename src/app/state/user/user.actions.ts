import { createAction, props } from '@ngrx/store';

import { User } from '@app/models';

export const setUser = createAction('[User] Set user', props<{ user: User }>());
export const removeUser = createAction('[User] Remove user');
