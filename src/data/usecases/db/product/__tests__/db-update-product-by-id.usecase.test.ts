import { EntityNotFoundError } from 'src/application/errors/EntityNotFoundError';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { productRepository } from 'src/tests/products/product-repository.mock';
import { productMock } from 'src/tests/products/product.mock';
import { DbUpdateProductByIdUseCase } from '../db-update-product-by-id.usecase';

describe('DB Update Product by ID Use Case', () => {
    beforeEach(() => setup());

    let dbUpdateProductByIdUseCase: DbUpdateProductByIdUseCase;

    // Mocks
    let productRepositoryMock: jest.Mocked<ProductRepository>;

    function setup() {
        productRepositoryMock = productRepository.create();

        dbUpdateProductByIdUseCase = new DbUpdateProductByIdUseCase(
            productRepositoryMock,
        );
    }

    test('it should update product successfully', async () => {
        const updateProductMock = productMock.create();
        productRepositoryMock.update.mockResolvedValue(updateProductMock);
        productRepositoryMock.getById.mockResolvedValue(updateProductMock);

        const saveProductDto = productMock.createSaveDto();

        const updateProduct = await dbUpdateProductByIdUseCase.perform(
            saveProductDto,
        );

        expect(productRepositoryMock.update).toHaveBeenCalledWith(
            updateProductMock,
        );

        expect(updateProduct.name).toEqual(saveProductDto.name);
        expect(updateProduct.price).toEqual(saveProductDto.price);
    });

    test('it should throw EntityNotFoundError if not found existing product with ID', async () => {
        productRepositoryMock.getById.mockResolvedValue(null);

        const saveProductDto = productMock.createSaveDto();

        const update = dbUpdateProductByIdUseCase.perform(saveProductDto);

        expect(update).rejects.toThrow(new EntityNotFoundError());
    });
});
