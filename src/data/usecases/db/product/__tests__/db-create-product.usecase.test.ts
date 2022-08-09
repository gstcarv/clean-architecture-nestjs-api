import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';
import { productRepository } from 'src/tests/products/product-repository.mock';
import { productMock } from 'src/tests/products/product.mock';
import { DbCreateProductUseCase } from '../db-create-product.usecase';

describe('DB Create Product Use Case', () => {
    beforeEach(() => setup());

    let dbCreateProductUseCase: DbCreateProductUseCase;

    // Mocks
    let productRepositoryMock: jest.Mocked<ProductRepository>;

    function setup() {
        productRepositoryMock = productRepository.create();

        dbCreateProductUseCase = new DbCreateProductUseCase(
            productRepositoryMock,
        );
    }

    test('it should create product successfully', async () => {
        const createdProductMock = productMock.create();
        productRepositoryMock.create.mockResolvedValue(createdProductMock);

        const saveProductDto = productMock.createSaveDto();

        const createdProduct = await dbCreateProductUseCase.perform(
            saveProductDto,
        );

        expect(productRepositoryMock.create).toHaveBeenCalledWith(
            SaveProductRequest.toProduct(saveProductDto),
        );

        expect(createdProduct.name).toEqual(saveProductDto.name);
        expect(createdProduct.price).toEqual(saveProductDto.price);
    });
});
