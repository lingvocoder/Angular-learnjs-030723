import {
    Component,
    ContentChild,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
    @ViewChild(MatDrawer, {static: true})
    private readonly drawerComponent!: MatDrawer;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport!: ViewContainerRef;

    @ContentChild('navigationTemplate', {static: true, descendants: true})
    private readonly navigationTemplate!: TemplateRef<unknown>;

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
    }

    ngOnInit(): void {
        this.insertNavigationTemplate(this.navigationTemplate);
    }

    private insertNavigationTemplate(template: TemplateRef<unknown>) {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(template);
    }
}
