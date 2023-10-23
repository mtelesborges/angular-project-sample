import { InjectionToken } from '@angular/core';

import { environment } from '../environments/environment';

export const BASE_API = new InjectionToken<string>('BASE_API', {
  factory: () => environment.api
});
