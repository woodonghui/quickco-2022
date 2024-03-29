import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'quickco2022',
  connector: 'mysql',
  // url: 'mysql://root:111@localhost/quickco2022',
  host: 'localhost',
  port: 3306,
  user: 'root',
  // database: 'quickco2022'
  // prod
  password: 'wSWTyP3xbs',
  database: 'quickcost'
  // local dev
  // database: 'mydb',
  // password: '111',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Quickco2022DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'quickco2022';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.quickco2022', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
