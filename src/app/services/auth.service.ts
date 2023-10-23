import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { tap, throwError } from 'rxjs';

import { UserService } from './user.service';

import { BASE_API, LOCALSTORAGE_USER_KEY } from '@app/config';
import { Auth, User } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private translateService: TranslateService,
    private httpClient: HttpClient,
    @Inject(BASE_API) private readonly baseApi: string,
    private userService: UserService
  ) {}

  login(data: Auth) {
    if (!data.code) {
      return throwError(() => {
        throw new Error(this.translateService.instant('code.required'));
      });
    }

    if (!data.password) {
      return throwError(() => {
        throw new Error(this.translateService.instant('password.required'));
      });
    }

    return this.httpClient.post<User>(`${this.baseApi}/login`, data).pipe(tap(user => this.userService.load(user)));
  }

  logout() {
    this.userService.remove();
  }

  isLoggedIn() {
    return localStorage.getItem(LOCALSTORAGE_USER_KEY);
  }
}
