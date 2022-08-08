import { Injectable } from '@nestjs/common';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';
import { HttpRequestData } from '../../helpers/http/http-request-data';
import { HttpResponse } from '../../helpers/http/http-response';
import { ok } from '../../helpers/http/server-responses';
import { ControllerHandler } from '../../protocols/controller-handler';

@Injectable()
export class GetProductByIdHandler implements ControllerHandler<Product> {
    constructor(private readonly getProductByIdUC: GetProductByIdUseCase) {}

    async execute(
        request: GetProductByIdHandler.RequestData,
    ): Promise<HttpResponse<Product>> {
        const httpResponse = await this.getProductByIdUC.perform(
            request.params.id,
        );

        return ok(httpResponse);
    }
}

export namespace GetProductByIdHandler {
    export type Params = { id: string };

    export type RequestData = HttpRequestData<unknown, Params>;
}
