import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from 'src/data/protocols/db/product/product-repository';
import { CreateProductUseCase } from 'src/domain/usecases/product/create-product.usecase';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { UpdateProductByIdUseCase } from 'src/domain/usecases/product/update-product-by-id.usecase';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';
import { ProductMongoRepository } from 'src/infra/db/mongodb/repository/product-mongo.repository';
import { DbCreateProductUseCase } from './product/db-create-product.usecase';
import { DbGetProductByIdUseCase } from './product/db-get-product-by-id.usecase';
import { DbUpdateProductByIdUseCase } from './product/db-update-product-by-id.usecase';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    exports: [
        GetProductByIdUseCase,
        CreateProductUseCase,
        UpdateProductByIdUseCase,
    ],
    providers: [
        {
            provide: ProductRepository,
            useClass: ProductMongoRepository,
        },
        {
            provide: GetProductByIdUseCase,
            useClass: DbGetProductByIdUseCase,
        },
        {
            provide: CreateProductUseCase,
            useClass: DbCreateProductUseCase,
        },
        {
            provide: UpdateProductByIdUseCase,
            useClass: DbUpdateProductByIdUseCase,
        },
    ],
})
export class ProductUseCases {}
