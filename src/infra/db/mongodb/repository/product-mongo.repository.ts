import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductMongoRepository implements ProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async getById(id: string): Promise<Product> {
        return this.productRepository.findOneBy({ _id: new ObjectID(id) });
    }

    async create(product: Omit<Product, 'id'>): Promise<Product> {
        return this.productRepository.save(product);
    }

    async update(product: Product): Promise<Product> {
        product.updatedAt = new Date();

        await this.productRepository.update({ _id: product._id }, product);

        return product;
    }
}
