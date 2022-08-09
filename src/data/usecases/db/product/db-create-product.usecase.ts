import { Injectable } from '@nestjs/common';
import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { CreateProductUseCase } from 'src/domain/usecases/product/create-product.usecase';

@Injectable()
export class DbCreateProductUseCase implements CreateProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    async perform(product: SaveProductRequest) {
        const toSave = SaveProductRequest.toProduct(product);

        return this.productRepository.create(toSave);
    }
}
