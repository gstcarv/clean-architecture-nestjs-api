import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export abstract class GetProductByIdUseCase {
    /**
     * Get product by its identification
     * @param id product's identification
     */
    abstract perform: (id: string) => Promise<Product>;
}
