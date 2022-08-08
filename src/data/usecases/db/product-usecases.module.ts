import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';
import { ProductMongoRepository } from 'src/infra/db/mongodb/repository/product-mongo.repository';
import { DbGetProductByIdUseCase } from './product/db-get-product-by-id.usecase';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    exports: [GetProductByIdUseCase],
    providers: [
        {
            provide: GetProductByIdUseCase,
            useClass: DbGetProductByIdUseCase,
        },
        {
            provide: ProductRepository,
            useClass: ProductMongoRepository,
        },
    ],
})
export class ProductUseCases {}
