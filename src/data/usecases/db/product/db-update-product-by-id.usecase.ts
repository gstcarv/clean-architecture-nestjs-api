import { Injectable } from '@nestjs/common';
import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { EntityNotFoundError } from 'src/application/errors/EntityNotFoundError';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { UpdateProductByIdUseCase } from 'src/domain/usecases/product/update-product-by-id.usecase';

@Injectable()
export class DbUpdateProductByIdUseCase implements UpdateProductByIdUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    async perform({ name, price, id }: SaveProductRequest) {
        const productToEdit = await this.productRepository.getById(id);

        if (!productToEdit) {
            return Promise.reject(new EntityNotFoundError());
        }

        Object.assign(productToEdit, {
            name,
            price,
        });

        return this.productRepository.update(productToEdit);
    }
}
