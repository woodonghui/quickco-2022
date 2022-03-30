import { Entity } from '@loopback/repository';
import { Product } from './product.model';
export declare class Supplier extends Entity {
    id?: number;
    address?: string;
    contact?: string;
    fax?: string;
    gstnumber?: string;
    gstregistered: boolean;
    name: string;
    telephone?: string;
    hasterm: boolean;
    products: Product[];
    constructor(data?: Partial<Supplier>);
}
export interface SupplierRelations {
}
export declare type SupplierWithRelations = Supplier & SupplierRelations;
