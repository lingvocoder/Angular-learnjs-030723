import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {SCOPE_NAME} from './shared/scope-name/scope-name.token';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [
    //     {
    //         provide: SCOPE_NAME,
    //         useValue: 'AppComponentElementInjector',
    //     },
    // ],
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    constructor(@Inject(SCOPE_NAME) private readonly scopeName: string) {
        // eslint-disable-next-line no-console
        console.log('AppComponent', this.scopeName);
    }
}
