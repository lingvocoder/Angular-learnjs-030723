import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    readonly imgSrc = '../../../favicon.ico';
    readonly title = 'Angular-learnjs-030723';
    // readonly imgSrc = 'https://kaifolog.ru/uploads/posts/2016-09/1474780501_011.jpg';

    // menuClick(event: Event) {
    //     event.stopPropagation();
    //     // eslint-disable-next-line no-console
    //     console.log('Menu click', event);
    // }
    menuClick() {
        // eslint-disable-next-line no-console
        console.log('Menu click');
    }
}
