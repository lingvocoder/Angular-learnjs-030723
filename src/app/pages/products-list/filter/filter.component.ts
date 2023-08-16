import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {debounceTime, map, takeUntil} from 'rxjs';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IProductsFilter} from './products-filter.interface';
import {DestroyService} from '../../../shared/destroy/destroy.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class FilterComponent implements OnChanges, OnInit {
    @Input() brands: string[] | null = null;
    @Input() initialFilter!: IProductsFilter;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();
    // Output by stream
    // @Output() readonly changeFilter: Observable<IProductsFilter>;

    readonly filterForm = new FormGroup({
        name: new FormControl(''),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    constructor(private readonly destroy$: DestroyService) {
        // Необходимо делать это в конструкторе, т.к. при создании потока нужна уже созданная форма (filterForm)
        // this.changeFilter = this.getFilterStream$();
    }

    ngOnInit(): void {
        this.initFormValue();
        this.listenFormChange();
    }

    ngOnChanges({brands}: SimpleChanges): void {
        if (brands) {
            this.initBrandsForm();
        }
    }

    private initFormValue() {
        const {name, priceRange} = this.initialFilter;

        this.filterForm.patchValue({name, priceRange});
    }

    private listenFormChange() {
        this.filterForm.valueChanges
            .pipe(
                debounceTime(300),
                map(
                    ({brands, ...otherFilters}) =>
                        ({
                            ...otherFilters,
                            brands: this.getBrandsListFromArray(brands as boolean[]),
                        } as IProductsFilter),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(filter => {
                this.changeFilter.emit(filter);
            });
    }

    private initBrandsForm() {
        const brandsControls = this.brands
            ? this.brands.map(() => new FormControl(false) as FormControl<boolean>)
            : ([] as Array<FormControl<boolean>>);

        const brandsForm = new FormArray<FormControl<boolean>>(brandsControls);

        this.filterForm.setControl('brands', brandsForm);
    }

    // Output by stream
    // private getFilterStream$(): Observable<IProductsFilter> {
    //     return this.filterForm.valueChanges.pipe(
    //         map(
    //             ({brands, name, ...otherValues}) =>
    //                 ({
    //                     ...otherValues,
    //                     name,
    //                     brands: this.getBrandsListFromArray(brands as boolean[]),
    //                 } as IProductsFilter),
    //         ),
    //     );
    // }

    private getBrandsListFromArray(brandsFormValue: boolean[]): IProductsFilter['brands'] {
        return !this.brands ? [] : this.brands.filter((_, index) => brandsFormValue[index]);
    }
}
