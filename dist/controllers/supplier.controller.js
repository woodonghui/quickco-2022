"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let SupplierController = class SupplierController {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async create(supplier) {
        return this.supplierRepository.create(supplier);
    }
    async count(where) {
        return this.supplierRepository.count(where);
    }
    async find(filter) {
        return this.supplierRepository.find(filter);
    }
    async updateAll(supplier, where) {
        return this.supplierRepository.updateAll(supplier, where);
    }
    async findById(id, filter) {
        return this.supplierRepository.findById(id, filter);
    }
    async updateById(id, supplier) {
        await this.supplierRepository.updateById(id, supplier);
    }
    async replaceById(id, supplier) {
        await this.supplierRepository.replaceById(id, supplier);
    }
    async deleteById(id) {
        await this.supplierRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/suppliers'),
    (0, rest_1.response)(200, {
        description: 'Supplier model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Supplier) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Supplier, {
                    title: 'NewSupplier',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Supplier]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/suppliers/count'),
    (0, rest_1.response)(200, {
        description: 'Supplier model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Supplier)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/suppliers'),
    (0, rest_1.response)(200, {
        description: 'Array of Supplier model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Supplier, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Supplier)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/suppliers'),
    (0, rest_1.response)(200, {
        description: 'Supplier PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Supplier, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Supplier)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Supplier, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/suppliers/{id}'),
    (0, rest_1.response)(200, {
        description: 'Supplier model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Supplier, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Supplier, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/suppliers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Supplier PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Supplier, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Supplier]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/suppliers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Supplier PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Supplier]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/suppliers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Supplier DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SupplierController.prototype, "deleteById", null);
SupplierController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SupplierRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SupplierRepository])
], SupplierController);
exports.SupplierController = SupplierController;
//# sourceMappingURL=supplier.controller.js.map