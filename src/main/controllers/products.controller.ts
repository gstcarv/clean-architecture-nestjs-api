import { Controller, Get, Req, Res } from '@nestjs/common';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { NestRouteAdapter } from '../adapters/nest-route-adapter';

@Controller()
export class ProductsController {
    constructor(private readonly getProductByIdUC: GetProductByIdUseCase) {}

    @Get(':id')
    async getProductById(@Req() req, @Res() res) {
        return await NestRouteAdapter.adapt(this.getProductByIdUC)(req, res);
    }
}
