"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkLogRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let WorkLogRepository = class WorkLogRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, employeeRepositoryGetter, outletRepositoryGetter, saleRecordRepositoryGetter) {
        super(models_1.WorkLog, dataSource);
        this.employeeRepositoryGetter = employeeRepositoryGetter;
        this.outletRepositoryGetter = outletRepositoryGetter;
        this.saleRecordRepositoryGetter = saleRecordRepositoryGetter;
        this.saleRecord = this.createBelongsToAccessorFor('saleRecord', saleRecordRepositoryGetter);
        this.registerInclusionResolver('saleRecord', this.saleRecord.inclusionResolver);
        this.outlet = this.createBelongsToAccessorFor('outlet', outletRepositoryGetter);
        this.registerInclusionResolver('outlet', this.outlet.inclusionResolver);
        this.employee = this.createBelongsToAccessorFor('employee', employeeRepositoryGetter);
        this.registerInclusionResolver('employee', this.employee.inclusionResolver);
    }
};
WorkLogRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.quickco2022')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('EmployeeRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('OutletRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('SaleRecordRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.Quickco2022DataSource, Function, Function, Function])
], WorkLogRepository);
exports.WorkLogRepository = WorkLogRepository;
//# sourceMappingURL=work-log.repository.js.map