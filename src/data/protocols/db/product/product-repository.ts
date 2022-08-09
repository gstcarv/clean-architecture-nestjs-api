import { Product } from 'src/infra/db/mongodb/entities/product.entity';

export abstract class ProductRepository {
    /**
     * Updates an product
     * @param id product's identification
     */
    abstract getById(id: string): Promise<Product>;

    /**
     * Creates a new product
     * @param product product info to be created
     */
    abstract create(product: Omit<Product, 'id'>): Promise<Product>;

    /**
     * Updates an product
     * @param product product info to be updated
     */
    abstract update(product: Product): Promise<Product>;
}
