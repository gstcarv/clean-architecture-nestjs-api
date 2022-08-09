import { Injectable } from '@nestjs/common';
import { FullProductResponse } from 'src/application/dto/product/FullProductResponse';
import { EntityNotFoundError } from 'src/application/errors/EntityNotFoundError';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { HttpRequestData } from '../../helpers/http/http-request-data';
import { HttpResponse } from '../../helpers/http/http-response';
import { notFound, ok } from '../../helpers/http/server-responses';
import { ControllerHandler } from '../../protocols/controller-handler';

@Injectable()
export class GetProductByIdHandler implements ControllerHandler {
    constructor(private readonly getProductByIdUC: GetProductByIdUseCase) {}

    async execute(
        request: GetProductByIdHandler.RequestData,
    ): Promise<HttpResponse> {
        const foundProduct = await this.getProductByIdUC.perform(
            request.params.id,
        );

        if (!foundProduct) {
            return notFound(new EntityNotFoundError());
        }

        return ok(FullProductResponse.fromEntity(foundProduct));
    }
}

export namespace GetProductByIdHandler {
    export type Params = { id: string };

    export type RequestData = HttpRequestData<unknown, Params>;
}
