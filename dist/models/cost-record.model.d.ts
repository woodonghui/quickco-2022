import { Entity } from '@loopback/repository';
export declare class CostRecord extends Entity {
    id?: number;
    date: string;
    paid: boolean;
    quantity: number;
    salerecordid: number;
    excludeincosting?: boolean;
    unitprice?: number;
    gst?: number;
    productid: number;
    constructor(data?: Partial<CostRecord>);
}
export interface CostRecordRelations {
}
export declare type CostRecordWithRelations = CostRecord & CostRecordRelations;
