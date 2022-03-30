import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SaleRecord } from '../models';
import { SaleRecordRepository } from '../repositories';
export declare class SalerecordController {
    saleRecordRepository: SaleRecordRepository;
    constructor(saleRecordRepository: SaleRecordRepository);
    create(saleRecord: SaleRecord): Promise<SaleRecord>;
    count(where?: Where<SaleRecord>): Promise<Count>;
    find(filter?: Filter<SaleRecord>): Promise<SaleRecord[]>;
    updateAll(saleRecord: SaleRecord, where?: Where<SaleRecord>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SaleRecord>): Promise<SaleRecord>;
    updateById(id: number, saleRecord: SaleRecord): Promise<void>;
    replaceById(id: number, saleRecord: SaleRecord): Promise<void>;
    deleteById(id: number): Promise<void>;
}
