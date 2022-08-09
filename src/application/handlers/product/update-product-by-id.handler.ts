import { Injectable } from '@nestjs/common';
import { FullProductResponse } from 'src/application/dto/product/FullProductResponse';
import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { EntityNotFoundError } from 'src/application/errors/EntityNotFoundError';
import { UpdateProductByIdUseCase } from 'src/domain/usecases/product/update-product-by-id.usecase';
import { HttpRequestData } from '../../helpers/http/http-request-data';
import { HttpResponse } from '../../helpers/http/http-response';
import { notFound, ok } from '../../helpers/http/server-responses';
import { ControllerHandler } from '../../protocols/controller-handler';

@Injectable()
export class UpdateProductByIdHandler implements ControllerHandler {
    constructor(
        private readonly updateProductByIdUC: UpdateProductByIdUseCase,
    ) {}

    async execute(
        request: UpdateProductByIdHandler.RequestData,
    ): Promise<HttpResponse> {
        request.body.id = request.params.id;

        const updatedProduct = await this.updateProductByIdUC.perform(
            request.body,
        );

        return ok(FullProductResponse.fromEntity(updatedProduct));
    }
}

export namespace UpdateProductByIdHandler {
    export type Params = { id: string };

    export type Body = SaveProductRequest;

    export type RequestData = HttpRequestData<Body, Params>;
}
