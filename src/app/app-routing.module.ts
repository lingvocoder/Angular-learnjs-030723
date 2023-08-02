import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {ProductModule} from './pages/product/product.module';
import {ProductComponent} from './pages/product/product.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';

// http://localhost:4200/ - origin = '';
// http://localhost:4200/products-list - origin = 'products-list';
// http://localhost:4200/product/id - origin = 'product/id';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        component: ProductsListComponent,
    },
    {
        path: 'product/id',
        component: ProductComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ProductsListModule, ProductModule, NotFoundModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
