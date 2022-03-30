"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutletController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let OutletController = class OutletController {
    constructor(outletRepository) {
        this.outletRepository = outletRepository;
    }
    async create(outlet) {
        return this.outletRepository.create(outlet);
    }
    async count(where) {
        return this.outletRepository.count(where);
    }
    async find(filter) {
        return this.outletRepository.find(filter);
    }
    async updateAll(outlet, where) {
        return this.outletRepository.updateAll(outlet, where);
    }
    async findById(id, filter) {
        return this.outletRepository.findById(id, filter);
    }
    async updateById(id, outlet) {
        await this.outletRepository.updateById(id, outlet);
    }
    async replaceById(id, outlet) {
        await this.outletRepository.replaceById(id, outlet);
    }
    async deleteById(id) {
        await this.outletRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/outlets'),
    (0, rest_1.response)(200, {
        description: 'Outlet model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Outlet) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Outlet, {
                    title: 'NewOutlet',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Outlet]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/outlets/count'),
    (0, rest_1.response)(200, {
        description: 'Outlet model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Outlet)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/outlets'),
    (0, rest_1.response)(200, {
        description: 'Array of Outlet model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Outlet, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Outlet)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/outlets'),
    (0, rest_1.response)(200, {
        description: 'Outlet PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Outlet, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Outlet)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Outlet, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/outlets/{id}'),
    (0, rest_1.response)(200, {
        description: 'Outlet model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Outlet, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Outlet, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/outlets/{id}'),
    (0, rest_1.response)(204, {
        description: 'Outlet PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Outlet, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Outlet]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/outlets/{id}'),
    (0, rest_1.response)(204, {
        description: 'Outlet PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Outlet]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/outlets/{id}'),
    (0, rest_1.response)(204, {
        description: 'Outlet DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OutletController.prototype, "deleteById", null);
OutletController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.OutletRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.OutletRepository])
], OutletController);
exports.OutletController = OutletController;
//# sourceMappingURL=outlet.controller.js.map