import { Module } from '@nestjs/common';
import { ProductUseCases } from 'src/data/usecases/db/product-usecases.module';
import { CreateProductHandler } from './product/create-product.handler';
import { GetProductByIdHandler } from './product/get-product-by-id.handler';
import { UpdateProductByIdHandler } from './product/update-product-by-id.handler';

@Module({
    imports: [ProductUseCases],
    exports: [
        GetProductByIdHandler,
        CreateProductHandler,
        UpdateProductByIdHandler,
    ],
    providers: [
        GetProductByIdHandler,
        CreateProductHandler,
        UpdateProductByIdHandler,
    ],
})
export class ProductHandlerModule {}
