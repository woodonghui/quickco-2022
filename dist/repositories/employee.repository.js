"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EmployeeRepository = class EmployeeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Employee, dataSource);
    }
};
EmployeeRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.quickco2022')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.Quickco2022DataSource])
], EmployeeRepository);
exports.EmployeeRepository = EmployeeRepository;
//# sourceMappingURL=employee.repository.js.map