import { Product, Supplier } from '../models';
import { ProductRepository } from '../repositories';
export declare class ProductSupplierController {
    productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    getSupplier(id: typeof Product.prototype.id): Promise<Supplier>;
}
