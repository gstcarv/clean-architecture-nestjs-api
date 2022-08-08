import { Controller, Get, Req, Res } from '@nestjs/common';
import { GetProductByIdHandler } from 'src/application/handlers/product/get-product-by-id.handler';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';

@Controller()
export class ProductsController {
    constructor(
        private readonly getProductByIdHandler: GetProductByIdHandler,
    ) {}

    @Get(':id')
    async getProductById(@Req() req, @Res() res) {
        return await NestRouteAdapter.adapt(this.getProductByIdHandler)(
            req,
            res,
        );
    }
}
