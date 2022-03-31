import { WorkLog, Outlet } from '../models';
import { WorkLogRepository } from '../repositories';
export declare class WorkLogOutletController {
    workLogRepository: WorkLogRepository;
    constructor(workLogRepository: WorkLogRepository);
    getOutlet(id: typeof WorkLog.prototype.id): Promise<Outlet>;
}
