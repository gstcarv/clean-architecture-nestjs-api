import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export abstract class CreateProductUseCase {
    /**
     * Creates a new product
     * @param product product's information
     */
    abstract perform: (product: SaveProductRequest) => Promise<Product>;
}
