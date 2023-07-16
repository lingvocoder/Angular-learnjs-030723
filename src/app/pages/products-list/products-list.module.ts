import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {ProductCardComponent} from './card/product-card.component';

@NgModule({
    declarations: [ProductsListComponent, ProductCardComponent],
    imports: [CommonModule, NgOptimizedImage],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
