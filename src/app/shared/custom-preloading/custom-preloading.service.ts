import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CustomPreloadingService implements PreloadingStrategy {
    preload({data, path}: Route, load: () => Observable<unknown>): Observable<unknown> {
        // eslint-disable-next-line dot-notation
        if (data?.['needPreload']) {
            // eslint-disable-next-line no-console
            console.log('Preload', path);

            return load();
        }

        // eslint-disable-next-line no-console
        console.log('NO Preload', path);

        return of(null);
    }
}
