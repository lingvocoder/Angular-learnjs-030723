import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    readonly imgSrc = '../../../favicon.ico';
    readonly title = 'Angular-learnjs-030723';

    menuClick() {
        // eslint-disable-next-line no-console
        console.log('Menu click');
    }
}
