import { SaveProductRequest } from 'src/application/dto/product/SaveProductRequest';
import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export abstract class UpdateProductByIdUseCase {
    /**
     * Updates a product by ID
     * @param product product's information
     */
    abstract perform: (product: SaveProductRequest) => Promise<Product>;
}
