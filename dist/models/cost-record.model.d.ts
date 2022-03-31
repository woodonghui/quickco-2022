import { Entity } from '@loopback/repository';
export declare class CostRecord extends Entity {
    id?: number;
    date: string;
    paid: boolean;
    quantity: number;
    excludeincosting?: boolean;
    unitprice?: number;
    gst?: number;
    productid: number;
    salerecordid: number;
    constructor(data?: Partial<CostRecord>);
}
export interface CostRecordRelations {
}
export declare type CostRecordWithRelations = CostRecord & CostRecordRelations;
