import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';
import { ObjectID } from 'mongodb';

export const productMock = {
    create: (): Product => ({
        _id: new ObjectID(),
        name: 'mock-product-name',
        price: 5.99,
        createdAt: new Date(),
        updatedAt: new Date(),
    }),

    createSaveDto: (): SaveProductRequest => ({
        id: new ObjectID().toString(),
        name: 'mock-product-name',
        price: 5.99,
    }),
};
