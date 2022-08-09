import { Controller, Get, Post, Put, Req, Res } from '@nestjs/common';
import { CreateProductHandler } from 'src/application/handlers/product/create-product.handler';
import { GetProductByIdHandler } from 'src/application/handlers/product/get-product-by-id.handler';
import { UpdateProductByIdHandler } from 'src/application/handlers/product/update-product-by-id.handler';
import { NestRouteAdapter } from 'src/main/adapters/nest-route-adapter';

@Controller()
export class ProductsController {
    constructor(
        private readonly getProductByIdHandler: GetProductByIdHandler,
        private readonly createProductHandler: CreateProductHandler,
        private readonly updateProductByIdHandler: UpdateProductByIdHandler,
    ) {}

    @Get(':id')
    async getProductById(@Req() req, @Res() res) {
        return await NestRouteAdapter.adapt(this.getProductByIdHandler)(
            req,
            res,
        );
    }

    @Post()
    async createProduct(@Req() req, @Res() res) {
        return await NestRouteAdapter.adapt(this.createProductHandler)(
            req,
            res,
        );
    }

    @Put(':id')
    async updateProduct(@Req() req, @Res() res) {
        return await NestRouteAdapter.adapt(this.updateProductByIdHandler)(
            req,
            res,
        );
    }
}
