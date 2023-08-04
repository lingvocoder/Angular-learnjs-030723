import {ChangeDetectionStrategy, Component} from '@angular/core';
import {filter, map, switchMap, tap} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    // eslint-disable-next-line dot-notation
    // readonly product$ = of(this.activatedRoute.snapshot.params['id']).pipe(
    // readonly product$ = of(this.activatedRoute.snapshot.paramMap.get('id')).pipe(
    readonly product$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        filter(Boolean),
        tap(productId => {
            this.productsStoreService.loadProduct(productId);
        }),
        switchMap(() => this.productsStoreService.currentProduct$),
    );

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) {
        // console.log(this.activatedRoute.snapshot.params);
        // setTimeout(() => {
        //     this.router.navigate(['/product', 'disk-pilnyj-bosch-2608644372']);
        // }, 3000);
        // this.router.navigate([], {
        //     queryParams: {
        //         name: 'name',
        //         brands: ['10'],
        //     },
        //     queryParamsHandling: 'merge',
        //     relativeTo: this.activatedRoute,
        // });
        // eslint-disable-next-line no-console
        // console.log(this.activatedRoute.snapshot.queryParams);
    }

    navigateToTab(tabName: string) {
        // eslint-disable-next-line no-console
        console.log(this.activatedRoute.snapshot);

        // this.router.navigate([`./${tabName}`]);
        // this.router.navigate([tabName], {relativeTo: this.activatedRoute});

        const urlTree = this.router.createUrlTree([tabName], {relativeTo: this.activatedRoute});

        // eslint-disable-next-line no-console
        console.log(urlTree);
        // eslint-disable-next-line no-console
        console.log(urlTree.toString());

        this.router.navigateByUrl(urlTree.toString());
    }
}
