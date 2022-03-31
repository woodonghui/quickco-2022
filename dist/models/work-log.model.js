"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const employee_model_1 = require("./employee.model");
const outlet_model_1 = require("./outlet.model");
const sale_record_model_1 = require("./sale-record.model");
let WorkLog = class WorkLog extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], WorkLog.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], WorkLog.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], WorkLog.prototype, "worklog", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => employee_model_1.Employee, { name: 'employee' }),
    (0, tslib_1.__metadata)("design:type", Number)
], WorkLog.prototype, "employeeid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => outlet_model_1.Outlet, { name: 'outlet' }),
    (0, tslib_1.__metadata)("design:type", Number)
], WorkLog.prototype, "outletid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => sale_record_model_1.SaleRecord, { name: 'saleRecord' }),
    (0, tslib_1.__metadata)("design:type", Number)
], WorkLog.prototype, "salerecordid", void 0);
WorkLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], WorkLog);
exports.WorkLog = WorkLog;
//# sourceMappingURL=work-log.model.js.map