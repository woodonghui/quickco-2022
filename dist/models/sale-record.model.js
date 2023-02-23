"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRecord = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cost_record_model_1 = require("./cost-record.model");
let SaleRecord = class SaleRecord extends repository_1.Entity {
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
], SaleRecord.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SaleRecord.prototype, "bankincash", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaleRecord.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SaleRecord.prototype, "foodpandaincome", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SaleRecord.prototype, "outletid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SaleRecord.prototype, "totalincome", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SaleRecord.prototype, "grabincome", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        mysql: {
            dataType: 'float'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SaleRecord.prototype, "grabpay", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        mysql: {
            dataType: 'float'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SaleRecord.prototype, "cdcincome", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => cost_record_model_1.CostRecord, { keyTo: 'salerecordid' }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaleRecord.prototype, "costRecords", void 0);
SaleRecord = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], SaleRecord);
exports.SaleRecord = SaleRecord;
//# sourceMappingURL=sale-record.model.js.map