import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Outlet } from '../models';
import { OutletRepository } from '../repositories';
export declare class OutletController {
    outletRepository: OutletRepository;
    constructor(outletRepository: OutletRepository);
    create(outlet: Outlet): Promise<Outlet>;
    count(where?: Where<Outlet>): Promise<Count>;
    find(filter?: Filter<Outlet>): Promise<Outlet[]>;
    updateAll(outlet: Outlet, where?: Where<Outlet>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Outlet>): Promise<Outlet>;
    updateById(id: number, outlet: Outlet): Promise<void>;
    replaceById(id: number, outlet: Outlet): Promise<void>;
    deleteById(id: number): Promise<void>;
}
