import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async canActivate() {
    if (!this.authService.isLoggedIn()) {
      await this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
