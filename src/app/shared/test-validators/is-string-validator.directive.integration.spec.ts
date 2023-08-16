import {FormsModule, NgModel} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {TestValidatorsModule} from './test-validators.module';

@Component({
    selector: 'app-test',
    template: `
        <input #input appIsStringValidator [ngModel]="search" />
    `,
})
class TestComponent {
    search = '123';

    @ViewChild('input', {static: true, read: NgModel})
    readonly ngModel!: NgModel;
}

describe('IsStringValidatorDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [TestValidatorsModule, FormsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('Ошибка валидатора при стартовом значении 123', fakeAsync(() => {
        fixture.detectChanges();

        tick(100);

        const {errors} = component.ngModel;

        expect(errors).toEqual({isString: 'Is not string'});
    }));
});
