import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { createMock } from 'ts-jest-mock';
import { productMock } from './product.mock';

export const productRepository = {
    create(): jest.Mocked<ProductRepository> {
        return createMock({
            getById: jest.fn().mockResolvedValue(productMock.create()),
            create: jest.fn().mockResolvedValue(productMock.create()),
            update: jest.fn().mockResolvedValue(productMock.create()),
        });
    },
};
