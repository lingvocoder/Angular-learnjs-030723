import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements OnChanges {
    @Input() template: TemplateRef<unknown> | null = null;
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport!: ViewContainerRef;

    ngOnChanges(template: SimpleChanges): void {
        if (this.viewport.length) {
            this.viewport.clear();
        }

        if (template) {
            this.updateView(this.template);
        }
    }

    updateView(template: TemplateRef<unknown> | null) {
        if (template) {
            this.viewport.createEmbeddedView(template);
        }
    }
}
