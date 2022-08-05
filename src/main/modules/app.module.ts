import { Module } from '@nestjs/common';
import { DbGetProductByIdUseCase } from 'src/data/usecases/db/product/db-get-product-by-id.usecase';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { ProductsController } from '../controllers/products.controller';

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [
        { provide: GetProductByIdUseCase, useClass: DbGetProductByIdUseCase },
    ],
})
export class AppModule {}
