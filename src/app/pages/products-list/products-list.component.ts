import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, distinctUntilChanged, map, startWith, switchMap, tap, timer} from 'rxjs';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {isStringValidator} from '../../shared/test-validators/is-string.validator';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.productsStoreService.loadProducts(subCategoryId);
        }),
        switchMap(() => this.productsStoreService.products$),
    );

    readonly searchControl = new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
        asyncValidators: [this.isStringAsyncValidator.bind(this)],
        // asyncValidators: [(control: AbstractControl) => this.isStringAsyncValidator(control)],
        updateOn: 'submit',
    });

    readonly searchControlErrors$ = this.searchControl.statusChanges.pipe(
        // map(status => status === 'INVALID' ? this.searchControl.errors : null),
        map(() => this.searchControl.errors),
        distinctUntilChanged(),
    );

    search = '';

    readonly counterControl = new FormControl(4);
    readonly counterControlValue$ = this.counterControl.valueChanges.pipe(
        startWith(this.counterControl.value),
    );

    counter = 8;

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        setTimeout(() => {
            this.counterControl.setValue(10);
            this.counter = 10;

            this.changeDetectorRef.markForCheck();
        }, 3000);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }

    private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
        return timer(3000).pipe(
            map(() => isStringValidator(control)),
            // tap(() => {
            //     this.changeDetectorRef.markForCheck();
            // }),
        );
    }
}
