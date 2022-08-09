import { productMock } from 'src/tests/products/product.mock';
import { createMock } from 'ts-jest-mock';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';
import { ProductMongoRepository } from '../product-mongo.repository';

describe('Product Mongo Repository', () => {
    beforeEach(() => setup());

    let productMongoRepository: ProductMongoRepository;

    // Mocks
    let mongoDbRepoMock: jest.Mocked<Partial<Repository<Product>>>;

    function setup() {
        mongoDbRepoMock = createMock({
            findBy: jest.fn(),
        });

        productMongoRepository = new ProductMongoRepository(
            mongoDbRepoMock as Repository<Product>,
        );
    }

    describe('getById', () => {
        test('it should call findOneBy with ID', async () => {
            await productMongoRepository.getById('mock-id');

            expect(mongoDbRepoMock.findOneBy).toHaveBeenCalledWith({
                id: 'mock-id',
            });
        });
    });

    describe('create', () => {
        test('it should call create method with product data', async () => {
            const mockProduct = productMock.create();

            await productMongoRepository.create(mockProduct);

            expect(mongoDbRepoMock.save).toHaveBeenCalledWith(mockProduct);
        });
    });

    describe('update', () => {
        test('it should call update method with product data', async () => {
            const mockProduct = productMock.create();

            await productMongoRepository.update(mockProduct);

            expect(mongoDbRepoMock.update).toHaveBeenCalledWith(
                { _id: mockProduct._id },
                mockProduct,
            );
        });
    });
});
