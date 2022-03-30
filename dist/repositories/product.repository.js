"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProductRepository = class ProductRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, supplierRepositoryGetter) {
        super(models_1.Product, dataSource);
        this.supplierRepositoryGetter = supplierRepositoryGetter;
        this.supplier = this.createBelongsToAccessorFor('supplier', supplierRepositoryGetter);
        this.registerInclusionResolver('supplier', this.supplier.inclusionResolver);
    }
};
ProductRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.quickco2022')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('SupplierRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.Quickco2022DataSource, Function])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map