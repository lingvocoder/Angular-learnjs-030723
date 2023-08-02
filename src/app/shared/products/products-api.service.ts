import {map, Observable, of} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import {productsMock} from './products.mock';
import {BASE_URL} from '../base-url/base-url.token';
import {IProductsDto} from './products.dto';
import {IProductDto} from './product.dto';

@Injectable()
export class ProductsApiService {
    constructor(@Inject(BASE_URL) private readonly baseUrl: string) {
        // eslint-disable-next-line no-console
        console.log(this.baseUrl);
    }

    getProducts$(): Observable<IProduct[]> {
        return of<IProductsDto>({data: {items: productsMock}}).pipe(map(({data}) => data.items));
    }

    getProduct$(_id: string): Observable<IProduct | undefined> {
        return of<IProductDto>({data: productsMock[0]}).pipe(map(({data}) => data));
    }
}
