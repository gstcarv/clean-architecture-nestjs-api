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
});
