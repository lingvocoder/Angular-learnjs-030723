import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
// import {SCOPE_NAME} from '../../shared/scope-name/scope-name.token';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [
    //     {
    //         provide: SCOPE_NAME,
    //         useValue: 'SidenavComponentElementInjector',
    //     },
    // ],
})
export class SidenavComponent {
    @ViewChild(MatDrawer, {static: true})
    private readonly drawerComponent!: MatDrawer;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
    // constructor(@Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef) {}

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        this.changeDetectorRef.markForCheck();
    }
}
