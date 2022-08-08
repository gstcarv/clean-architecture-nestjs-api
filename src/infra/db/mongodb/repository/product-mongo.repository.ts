import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductMongoRepository implements ProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async getById(id: string): Promise<Product> {
        return await this.productRepository.findOneBy({ id });
    }
}
