import {productsMock} from '../products/products.mock';
import {FilterByPropertyPipe} from './filter-by-property.pipe';

describe('FilterByPropertyPipe', () => {
    let pipe!: FilterByPropertyPipe;

    beforeEach(() => {
        pipe = new FilterByPropertyPipe();
    });

    it('Фильтрация по имени', () => {
        const value = pipe.transform(productsMock, 'name', productsMock[0].name);

        expect(value).toEqual([productsMock[0]]);
    });

    it('Фильтрация по не существующему имени', () => {
        const value = pipe.transform(productsMock, 'name', 'Unknow name');

        expect(value).toEqual([]);
    });

    it('Фильтрация по не пустому имени', () => {
        const value = pipe.transform(productsMock, 'name', '');

        expect(value).toEqual(productsMock);
    });
});
