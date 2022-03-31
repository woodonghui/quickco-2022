import { Entity } from '@loopback/repository';
import { CostRecord } from './cost-record.model';
export declare class SaleRecord extends Entity {
    id?: number;
    bankincash: number;
    date: string;
    foodpandaincome: number;
    outletid: number;
    totalincome: number;
    grabincome?: number;
    grabpay?: number;
    costRecords: CostRecord[];
    constructor(data?: Partial<SaleRecord>);
}
export interface SaleRecordRelations {
}
export declare type SaleRecordWithRelations = SaleRecord & SaleRecordRelations;
