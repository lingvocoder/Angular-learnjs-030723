import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {Subject, debounceTime, map, takeUntil} from 'rxjs';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IProductsFilter} from './products-filter.interface';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges, OnInit, OnDestroy {
    private readonly destroy$ = new Subject<void>();

    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    readonly filterForm = new FormGroup({
        name: new FormControl(''),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    ngOnInit(): void {
        this.listenFormChange();
    }

    ngOnChanges({brands}: SimpleChanges): void {
        if (brands) {
            this.initBrandsForm();
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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
            .subscribe(_filter => {
                // eslint-disable-next-line no-console
                // console.log(filter);
            });
    }

    private getBrandsListFromArray(brandsValueList: boolean[]): string[] {
        if (!this.brands) {
            return [];
        }

        return this.brands.filter((_, index) => brandsValueList[index]);
    }

    private initBrandsForm() {
        const brandsControls = this.brands
            ? this.brands.map(() => new FormControl(false) as FormControl<boolean>)
            : ([] as Array<FormControl<boolean>>);

        const brandsForm = new FormArray<FormControl<boolean>>(brandsControls);

        this.filterForm.setControl('brands', brandsForm);
    }
}
