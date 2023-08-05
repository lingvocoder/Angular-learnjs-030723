import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {CustomPreloadingService} from './shared/custom-preloading/custom-preloading.service';

// 'product' / 'id' / 'type'

// 'product' / 'id' / 'info'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    // {
    //     path: 'root/:id',
    //     redirectTo: ':id/root',
    // },
    // {
    //     path: ':id/root',
    //     // component: ...,
    // },
    {
        path: 'products-list',
        // component: ProductsListComponent,
        loadChildren: () =>
            import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
        // resolve: {
        //     products: ProductsResolver,
        // },
        data: {
            needPreload: true,
        },
    },
    {
        path: 'product/:id', // :id - динамический сегмент (параметр)
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
        // canActivate: [QuestionCanActivateGuard],
        // canDeactivate: [QuestionCanDeactivateGuard],
        // canLoad: [QuestionCanLoadGuard],
        // canMatch: [QuestionCanMatchGuard],
        // canMatch: [(...args: any[]) => inject(QuestionCanMatchGuard).canMatch(...args)],
        data: {
            needPreload: false,
        },
        // component: ProductComponent,
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'description',
        //         pathMatch: 'full',
        //     },
        //     {
        //         path: 'description',
        //         component: DescriptionComponent,
        //     },
        //     {
        //         path: 'type',
        //         component: TypeComponent,
        //     },
        // ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService}),
        NotFoundModule,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
