import { Count, Filter, Where } from '@loopback/repository';
import { Supplier, Product } from '../models';
import { SupplierRepository } from '../repositories';
export declare class SupplierProductController {
    protected supplierRepository: SupplierRepository;
    constructor(supplierRepository: SupplierRepository);
    find(id: number, filter?: Filter<Product>): Promise<Product[]>;
    create(id: typeof Supplier.prototype.id, product: Omit<Product, 'id'>): Promise<Product>;
    patch(id: number, product: Partial<Product>, where?: Where<Product>): Promise<Count>;
    delete(id: number, where?: Where<Product>): Promise<Count>;
}
