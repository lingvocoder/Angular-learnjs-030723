import {
    Component,
    ContentChild,
    ElementRef,
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
    // @Input() set navigationTemplate(template: TemplateRef<unknown>) {
    //     this.insertNavigationTemplate(template);
    // }

    @ViewChild(MatDrawer, {static: true})
    private readonly drawerComponent!: MatDrawer;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport!: ViewContainerRef;

    @ViewChild(MatDrawer, {read: ElementRef, static: true})
    private readonly drawerElementRef!: ElementRef<HTMLElement>;

    @ContentChild('navigationTemplate', {static: true, descendants: true})
    private readonly navigationTemplate!: TemplateRef<unknown>;

    toggleSidenavOpened() {
        // eslint-disable-next-line no-console
        console.log(this.drawerElementRef?.nativeElement);
        this.drawerComponent?.toggle();
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        // console.log('ngOnInit', this.drawerElementRef);

        this.insertNavigationTemplate(this.navigationTemplate);
    }

    private insertNavigationTemplate(template: TemplateRef<unknown>) {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(template);
    }

    // ngAfterViewInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngAfterViewInit', this.drawerElementRef);
    // }
}
