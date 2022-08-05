import { ControllerHandler } from 'src/application/protocols/controller-handler';
import { Product } from 'src/domain/models/product.model';

export abstract class GetProductByIdUseCase extends ControllerHandler<Product> {}
