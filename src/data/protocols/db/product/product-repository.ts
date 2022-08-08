import { Injectable } from '@nestjs/common';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export abstract class ProductRepository {
    abstract getById(id: string): Promise<Product>;
}
