"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRecordRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SaleRecordRepository = class SaleRecordRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, costRecordRepositoryGetter) {
        super(models_1.SaleRecord, dataSource);
        this.costRecordRepositoryGetter = costRecordRepositoryGetter;
        this.costRecords = this.createHasManyRepositoryFactoryFor('costRecords', costRecordRepositoryGetter);
        this.registerInclusionResolver('costRecords', this.costRecords.inclusionResolver);
    }
};
SaleRecordRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.quickco2022')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('CostRecordRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.Quickco2022DataSource, Function])
], SaleRecordRepository);
exports.SaleRecordRepository = SaleRecordRepository;
//# sourceMappingURL=sale-record.repository.js.map