import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '@app/services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  form!: FormGroup;
  private _onDestroy: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      code: [null, Validators.required],
      password: [null, Validators.required],
      grantType: null
    });
  }

  login() {
    this.authService
      .login({ ...this.form.getRawValue() })
      .pipe(takeUntil(this._onDestroy))
      .subscribe({
        error: _error => {}
      });
  }
}
