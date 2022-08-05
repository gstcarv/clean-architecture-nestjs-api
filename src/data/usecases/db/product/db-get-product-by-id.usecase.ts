import { Injectable } from '@nestjs/common';
import { HttpRequestData } from 'src/application/helpers/http/http-request-data';
import { ok } from 'src/application/helpers/http/server-responses';
import { Product } from 'src/domain/models/product.model';
import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';

@Injectable()
export class DbGetProductByIdUseCase implements GetProductByIdUseCase {
    execute(req: HttpRequestData) {
        return Promise.resolve(ok(new Product()));
    }
}
