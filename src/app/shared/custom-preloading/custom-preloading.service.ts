import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CustomPreloadingService implements PreloadingStrategy {
    preload({data}: Route, load: () => Observable<unknown>): Observable<unknown> {
        // eslint-disable-next-line dot-notation
        return data?.['needPreload'] ? load() : of(null);
    }
}
