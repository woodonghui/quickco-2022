import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    name: string;
    sku?: string;
    unit?: string;
    unitprice: number;
    excludeincosting?: boolean;
    supplierid: number;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;
