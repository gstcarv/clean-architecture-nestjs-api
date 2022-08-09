import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export class FullProductResponse {
    id: string;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;

    static fromEntity({
        _id,
        name,
        price,
        updatedAt,
        createdAt,
    }: Product): FullProductResponse {
        const response = new FullProductResponse();

        response.id = _id.toString();
        response.name = name;
        response.price = price;
        response.updatedAt = updatedAt;
        response.createdAt = createdAt;

        return response;
    }
}
