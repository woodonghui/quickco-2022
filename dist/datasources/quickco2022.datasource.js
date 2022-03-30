"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quickco2022DataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'quickco2022',
    connector: 'mysql',
    // url: 'mysql://root:111@localhost/quickco2022',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '111',
    database: 'quickco2022'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let Quickco2022DataSource = class Quickco2022DataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
Quickco2022DataSource.dataSourceName = 'quickco2022';
Quickco2022DataSource.defaultConfig = config;
Quickco2022DataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.quickco2022', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Quickco2022DataSource);
exports.Quickco2022DataSource = Quickco2022DataSource;
//# sourceMappingURL=quickco2022.datasource.js.map