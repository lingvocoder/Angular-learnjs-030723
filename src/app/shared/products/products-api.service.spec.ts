import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ProductsApiService} from './products-api.service';
import {productsMock} from './products.mock';

// const mockHttpClient = {
//     get(_url: string) {},
// } as HttpClient;

describe('ProductsApiService', () => {
    let service!: ProductsApiService;
    let httpTestingController!: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ProductsApiService,
                // {
                //     provide: HttpClient,
                //     useValue: mockHttpClient,
                // },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('Загрузка продуктов', complete => {
        // spyOn(mockHttpClient, 'get').and.returnValue(of({data: {items: productsMock}}));

        service.getProducts$().subscribe({
            next: products => {
                expect(products).toEqual(productsMock);
            },
            complete,
        });

        httpTestingController.expectOne('/products').flush({data: {items: productsMock}});
    });
});
