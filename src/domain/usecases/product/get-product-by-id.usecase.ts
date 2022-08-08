import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export abstract class GetProductByIdUseCase {
    abstract perform: (id: string) => Promise<Product>;
}
