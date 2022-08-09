import { Injectable } from '@nestjs/common';
import { FullProductResponse } from 'src/application/dto/product/FullProductResponse';
import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { SaveProductValidator } from 'src/application/validation/schemas/products/save-product.validator';
import { CreateProductUseCase } from 'src/domain/usecases/product/create-product.usecase';
import { ValidationHandler } from 'src/validation/validation-executer';
import { HttpRequestData } from '../../helpers/http/http-request-data';
import { HttpResponse } from '../../helpers/http/http-response';
import { created } from '../../helpers/http/server-responses';
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

    validate(request: CreateProductHandler.RequestData): ValidationHandler {
        return new SaveProductValidator().build(request);
    }
}

export namespace CreateProductHandler {
    export type Body = SaveProductRequest;

    export type RequestData = HttpRequestData<Body, null>;
}
