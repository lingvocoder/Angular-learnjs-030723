import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {SidenavModule} from './components/sidenav/sidenav.module';
import {PopupHostModule} from './components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';
import {ProductsStoreService} from './shared/products/products-store.service';
import {ProductsApiService} from './shared/products/products-api.service';
import {BASE_URL} from './shared/base-url/base-url.token';
import {baseUrl} from './shared/base-url/base-url.const';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductsListModule,
        SidenavModule,
        MatListModule,
        PopupHostModule,
        InsertShadowModule,
    ],
    providers: [
        // {
        //     provide: ProductsStoreService, // token
        //     useClass: ProductsStoreService,
        // },
        ProductsStoreService,
        ProductsApiService,
        // {
        //     provide: 'ProductsStoreService',
        //     useValue: 'new ProductsStoreService()',
        //     multi: true,
        // },
        // {
        //     provide: ProductsStoreService, // token
        //     useValue: new ProductsStoreService(),
        // },
        // {
        //     provide: 'ProductsStoreService',
        //     useExisting: ProductsStoreService,
        //     multi: true,
        // },
        // {
        //     provide: 'ProductsStoreService',
        //     useFactory: (productsStoreService: ProductsStoreService) => productsStoreService,
        //     deps: [ProductsStoreService],
        // },
        {
            provide: BASE_URL,
            useValue: baseUrl,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
