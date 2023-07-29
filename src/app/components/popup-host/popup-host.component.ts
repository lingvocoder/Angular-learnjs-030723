import {
    AfterViewChecked,
    Component,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements AfterViewChecked {
    @Input() template: TemplateRef<unknown> | null = null;
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | null = null;

    ngAfterViewChecked() {
        this.viewport?.clear();

        if (this.template) {
            this.viewport?.createEmbeddedView(this.template);
        }
    }
}
