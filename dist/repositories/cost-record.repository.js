"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostRecordRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CostRecordRepository = class CostRecordRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productRepositoryGetter, saleRecordRepositoryGetter) {
        super(models_1.CostRecord, dataSource);
        this.productRepositoryGetter = productRepositoryGetter;
        this.saleRecordRepositoryGetter = saleRecordRepositoryGetter;
        this.saleRecord = this.createBelongsToAccessorFor('saleRecord', saleRecordRepositoryGetter);
        this.registerInclusionResolver('saleRecord', this.saleRecord.inclusionResolver);
        this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
        this.registerInclusionResolver('product', this.product.inclusionResolver);
    }
};
CostRecordRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.quickco2022')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ProductRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('SaleRecordRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.Quickco2022DataSource, Function, Function])
], CostRecordRepository);
exports.CostRecordRepository = CostRecordRepository;
//# sourceMappingURL=cost-record.repository.js.map