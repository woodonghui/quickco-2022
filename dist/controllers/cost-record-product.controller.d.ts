import { CostRecord, Product } from '../models';
import { CostRecordRepository } from '../repositories';
export declare class CostRecordProductController {
    costRecordRepository: CostRecordRepository;
    constructor(costRecordRepository: CostRecordRepository);
    getProduct(id: typeof CostRecord.prototype.id): Promise<Product>;
}
