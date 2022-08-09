import { Product } from 'src/infra/db/mongodb/entities/product.entity';
import { ObjectID } from 'mongodb';

export class SaveProductRequest {
    id?: string;
    name: string;
    price: number;

    static toProduct({ id, name, price }: SaveProductRequest): Product {
        const product = new Product();

        product._id = new ObjectID(id);
        product.name = name;
        product.price = price;

        return product;
    }
}
