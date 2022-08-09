import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { productRepository } from 'src/tests/products/product-repository.mock';
import { productMock } from 'src/tests/products/product.mock';
import { DbGetProductByIdUseCase } from '../db-get-product-by-id.usecase';

describe('DB Get Product By Id Use Case', () => {
    beforeEach(() => setup());

    let dbGetProductByIdUseCase: DbGetProductByIdUseCase;

    // Mocks
    let productRepositoryMock: jest.Mocked<ProductRepository>;

    function setup() {
        productRepositoryMock = productRepository.create();

        dbGetProductByIdUseCase = new DbGetProductByIdUseCase(
            productRepositoryMock,
        );
    }

    test('it should return all product from specific product data', async () => {
        productRepositoryMock.getById.mockResolvedValue(productMock.create());

        const productData = await dbGetProductByIdUseCase.perform('mock-id');

        expect(productRepositoryMock.getById).toHaveBeenCalledWith('mock-id');
        expect(productData.name).toBe('mock-product-name');
    });
});
