import { WorkLog, SaleRecord } from '../models';
import { WorkLogRepository } from '../repositories';
export declare class WorkLogSaleRecordController {
    workLogRepository: WorkLogRepository;
    constructor(workLogRepository: WorkLogRepository);
    getSaleRecord(id: typeof WorkLog.prototype.id): Promise<SaleRecord>;
}
