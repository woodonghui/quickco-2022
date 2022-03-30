"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSupplierController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductSupplierController = class ProductSupplierController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getSupplier(id) {
        return this.productRepository.supplier(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/products/{id}/supplier', {
        responses: {
            '200': {
                description: 'Supplier belonging to Product',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Supplier) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductSupplierController.prototype, "getSupplier", null);
ProductSupplierController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductRepository])
], ProductSupplierController);
exports.ProductSupplierController = ProductSupplierController;
//# sourceMappingURL=product-supplier.controller.js.map