import { Entity } from '@loopback/repository';
export declare class Outlet extends Entity {
    id?: number;
    name: string;
    address?: string;
    contact?: string;
    constructor(data?: Partial<Outlet>);
}
export interface OutletRelations {
}
export declare type OutletWithRelations = Outlet & OutletRelations;
