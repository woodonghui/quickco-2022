"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SupplierProductController = class SupplierProductController {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async find(id, filter) {
        return this.supplierRepository.products(id).find(filter);
    }
    async create(id, product) {
        return this.supplierRepository.products(id).create(product);
    }
    async patch(id, product, where) {
        return this.supplierRepository.products(id).patch(product, where);
    }
    async delete(id, where) {
        return this.supplierRepository.products(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/suppliers/{id}/products', {
        responses: {
            '200': {
                description: 'Array of Supplier has many Product',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Product) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierProductController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/suppliers/{id}/products', {
        responses: {
            '200': {
                description: 'Supplier model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Product) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, {
                    title: 'NewProductInSupplier',
                    exclude: ['id'],
                    optional: ['supplierid']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierProductController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/suppliers/{id}/products', {
        responses: {
            '200': {
                description: 'Supplier.Product PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Product))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierProductController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/suppliers/{id}/products', {
        responses: {
            '200': {
                description: 'Supplier.Product DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Product))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierProductController.prototype, "delete", null);
SupplierProductController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SupplierRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SupplierRepository])
], SupplierProductController);
exports.SupplierProductController = SupplierProductController;
//# sourceMappingURL=supplier-product.controller.js.map