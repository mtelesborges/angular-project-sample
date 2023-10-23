import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LOCALSTORAGE_USER_KEY } from '@app/config';
import { User } from '@app/models';
import { removeUser, setUser } from '@app/state/user';
import { selectUserFeatureSelector } from '@app/state/user/user.selector';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private store: Store) {}

  load(user: User) {
    this.store.dispatch(setUser({ user }));
    localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user));
  }

  remove() {
    this.store.dispatch(removeUser());
    localStorage.removeItem(LOCALSTORAGE_USER_KEY);
  }

  get() {
    return this.store.select(selectUserFeatureSelector);
  }
}
