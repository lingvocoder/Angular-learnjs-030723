import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {IApplicationConfig} from './shared/application-config/application-config.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly applicationConfig: IApplicationConfig = applicationConfigMock;

    // shouldShowSidenav = false;

    // onMenuClick(event: void) {
    //     // eslint-disable-next-line no-console
    //     console.log('Menu click - AppComponent', event);

    //     this.shouldShowSidenav = !this.shouldShowSidenav;
    // }
}
