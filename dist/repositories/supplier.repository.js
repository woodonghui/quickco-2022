"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SupplierRepository = class SupplierRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productRepositoryGetter) {
        super(models_1.Supplier, dataSource);
        this.productRepositoryGetter = productRepositoryGetter;
        this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter);
        this.registerInclusionResolver('products', this.products.inclusionResolver);
    }
};
SupplierRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.quickco2022')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ProductRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.Quickco2022DataSource, Function])
], SupplierRepository);
exports.SupplierRepository = SupplierRepository;
//# sourceMappingURL=supplier.repository.js.map