import { Module } from '@nestjs/common';
import { ProductUseCases } from 'src/data/usecases/db/product-usecases.module';
import { GetProductByIdHandler } from './product/get-product-by-id.handler';

@Module({
    imports: [ProductUseCases],
    exports: [GetProductByIdHandler],
    providers: [GetProductByIdHandler],
})
export class ProductHandlerModule {}
