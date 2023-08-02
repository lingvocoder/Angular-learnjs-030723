import {InjectionToken} from '@angular/core';

export const SCOPE_NAME = new InjectionToken('Scope name', {
    providedIn: 'root',
    factory: () => 'RootInjector',
});
