import { CostRecord, SaleRecord } from '../models';
import { CostRecordRepository } from '../repositories';
export declare class CostRecordSaleRecordController {
    costRecordRepository: CostRecordRepository;
    constructor(costRecordRepository: CostRecordRepository);
    getSaleRecord(id: typeof CostRecord.prototype.id): Promise<SaleRecord>;
}
