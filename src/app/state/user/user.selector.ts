import { createFeatureSelector } from '@ngrx/store';

import { User } from '@app/models';

export const selectUserFeatureSelector = createFeatureSelector<User>('user');
