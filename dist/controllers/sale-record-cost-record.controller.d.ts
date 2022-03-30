import { Count, Filter, Where } from '@loopback/repository';
import { SaleRecord, CostRecord } from '../models';
import { SaleRecordRepository } from '../repositories';
export declare class SaleRecordCostRecordController {
    protected saleRecordRepository: SaleRecordRepository;
    constructor(saleRecordRepository: SaleRecordRepository);
    find(id: number, filter?: Filter<CostRecord>): Promise<CostRecord[]>;
    create(id: typeof SaleRecord.prototype.id, costRecord: Omit<CostRecord, 'id'>): Promise<CostRecord>;
    patch(id: number, costRecord: Partial<CostRecord>, where?: Where<CostRecord>): Promise<Count>;
    delete(id: number, where?: Where<CostRecord>): Promise<Count>;
}
