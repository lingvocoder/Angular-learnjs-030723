import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {SidenavModule} from './components/sidenav/sidenav.module';
import {PopupHostModule} from './components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';
import {BaseUrlInterceptor} from './shared/base-url/base-url.interceptor';
import {SCOPE_NAME} from './shared/scope-name/scope-name.token';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        SidenavModule,
        MatListModule,
        PopupHostModule,
        InsertShadowModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: BaseUrlInterceptor,
        },
        {
            provide: SCOPE_NAME,
            useValue: 'RootInjector(AppModuleInjector)',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * NullInjector
 *
 * |
 *
 * PlatformInjector
 *
 * |
 *
 * RootInjector(bootsrap module injector - AppModuleInjector)
 *
 * |                                    \
 *
 * ProductsListModuleInjector           ProductModuleInjector
 *
 * --------------------------------------------------
 *
 * AppComponentElementInjector
 *
 * |                                                \
 *
 * SidenavComponentElementInjector                  HeaderComponentElementInjector
 *
 * |                                        \
 *
 * ProductsListComponentElementInjector     ProductComponentElementInjector
 */
