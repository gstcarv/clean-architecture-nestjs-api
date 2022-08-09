import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { createMock } from 'ts-jest-mock';

export const productRepository = {
    create(): jest.Mocked<ProductRepository> {
        return createMock({
            getById: jest.fn(),
        });
    },
};
