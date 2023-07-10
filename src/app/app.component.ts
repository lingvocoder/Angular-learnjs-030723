import {Component} from '@angular/core';

@Component({
    // selector: 'div#root',
    // selector: 'button[myButtonComponent]',
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: `
    //     <h1>Salut</h1>
    // `,
    styleUrls: ['./app.component.css'],
    // styles: ['h1 {color: red}'],
    // interpolation: ['{{', '}}'],
})
export class AppComponent {
    // title = 'Angular-learnjs-030723';
    // readonly window = window;
    // getTitle() {
    //     return this.title;
    // }

    headerClick() {
        // eslint-disable-next-line no-console
        console.log('Header click');
    }

    // logKeyDown(event: Event) {
    //     // eslint-disable-next-line no-console
    //     console.log('Input  ', event);
    // }
}
