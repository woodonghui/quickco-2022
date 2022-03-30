import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CostRecord } from '../models';
import { CostRecordRepository } from '../repositories';
export declare class CostrecordController {
    costRecordRepository: CostRecordRepository;
    constructor(costRecordRepository: CostRecordRepository);
    create(costRecord: CostRecord): Promise<CostRecord>;
    count(where?: Where<CostRecord>): Promise<Count>;
    find(filter?: Filter<CostRecord>): Promise<CostRecord[]>;
    updateAll(costRecord: CostRecord, where?: Where<CostRecord>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<CostRecord>): Promise<CostRecord>;
    updateById(id: number, costRecord: CostRecord): Promise<void>;
    replaceById(id: number, costRecord: CostRecord): Promise<void>;
    deleteById(id: number): Promise<void>;
}
