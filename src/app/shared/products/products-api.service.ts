import {map, Observable, of} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import {productsMock} from './products.mock';
import {BASE_URL} from '../base-url/base-url.token';

@Injectable()
export class ProductsApiService {
    constructor(@Inject(BASE_URL) private readonly baseUrl: string) {
        // eslint-disable-next-line no-console
        console.log(this.baseUrl);
    }

    getProducts$(): Observable<IProduct[]> {
        return of({data: {items: productsMock}}).pipe(map(({data}) => data.items));
    }
}
