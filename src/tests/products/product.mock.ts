import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export const productMock = {
    create: (): Product => ({
        id: '1234-1234-1234-1234',
        name: 'mock-product-name',
        price: 5.99,
        createdAt: new Date(),
        updatedAt: new Date(),
    }),
};
