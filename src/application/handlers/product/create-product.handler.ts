import { Injectable } from '@nestjs/common';
import { FullProductResponse } from 'src/application/dto/product/FullProductResponse';
import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { EntityNotFoundError } from 'src/application/errors/EntityNotFoundError';
import { CreateProductUseCase } from 'src/domain/usecases/product/create-product.usecase';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { HttpRequestData } from '../../helpers/http/http-request-data';
import { HttpResponse } from '../../helpers/http/http-response';
import { created, notFound, ok } from '../../helpers/http/server-responses';
import { ControllerHandler } from '../../protocols/controller-handler';

@Injectable()
export class CreateProductHandler implements ControllerHandler {
    constructor(private readonly createProductUC: CreateProductUseCase) {}

    async execute(
        request: CreateProductHandler.RequestData,
    ): Promise<HttpResponse> {
        const createdProduct = await this.createProductUC.perform(request.body);

        return created(FullProductResponse.fromEntity(createdProduct));
    }
}

export namespace CreateProductHandler {
    export type Body = SaveProductRequest;

    export type RequestData = HttpRequestData<Body, null>;
}
