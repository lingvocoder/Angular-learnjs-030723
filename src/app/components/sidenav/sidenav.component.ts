import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    // @Input() isSidenavOpened = false;

    // @Output() readonly isSidenavOpenedChange = new EventEmitter<boolean>();

    @ViewChild('drawerComponent')
    private readonly drawerComponent: MatDrawer | null = null;

    toggleSidenavOpened() {
        // this.isSidenavOpened = !this.isSidenavOpened;
        // this.isSidenavOpenedChange.emit(!this.isSidenavOpened);

        this.drawerComponent?.toggle();
    }
}
