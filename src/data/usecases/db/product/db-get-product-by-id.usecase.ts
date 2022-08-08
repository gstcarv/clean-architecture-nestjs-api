import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';

@Injectable()
export class DbGetProductByIdUseCase implements GetProductByIdUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    perform(id: string) {
        return this.productRepository.getById(id);
    }
}
