import {InjectionToken} from '@angular/core';
import {baseUrl} from './base-url.const';

export const BASE_URL = new InjectionToken('Base url for application', {
    providedIn: 'root',
    factory: () => baseUrl,
});
// export const BASE_URL_COPY = new InjectionToken('Base url for application');
