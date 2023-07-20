import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appDumpNgIf]',
})
export class DumpNgIfDirective {
    @Input() set appDumpNgIf(visibilityFlag: any) {
        const isContainerHasView = this.viewContainerRef.length;
        const needClear = !visibilityFlag && isContainerHasView;

        if (needClear) {
            this.viewContainerRef.clear();

            return;
        }

        const needCreateView = visibilityFlag && !isContainerHasView;

        if (needCreateView) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                appDumpNgIf: visibilityFlag,
                $implicit: visibilityFlag,
            });
        }
    }

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<unknown>,
    ) {}
}
