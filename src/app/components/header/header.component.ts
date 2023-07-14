import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Input() applicationConfig: IApplicationConfig | null = null;

    // @Output() readonly menuClick = new EventEmitter<string>();
    @Output() readonly menuClick = new EventEmitter<void>();
    // @Output() readonly menuClick = of(1, 2, 3);

    // readonly imgSrc = '../../../favicon.ico';
    // readonly title = 'Angular-learnjs-030723';

    onMenuClick() {
        // eslint-disable-next-line no-console
        console.log('Menu click - HeaderComponent');

        // this.menuClick.emit('clicked');
        this.menuClick.emit();
    }
}
