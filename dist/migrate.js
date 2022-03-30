"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const application_1 = require("./application");
async function migrate(args) {
    const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
    console.log('Migrating schemas (%s existing schema)', existingSchema);
    const app = new application_1.QuickcoApplication();
    await app.boot();
    await app.migrateSchema({
        existingSchema,
        models: ['Outlet', 'SaleRecord', 'Supplier', 'Product', 'CostRecord', 'Employee', 'WorkLog']
    });
    //mysql --user=root --password quickco2022
    // show full columns from tablename
    // ALTER TABLE tablename CONVERT TO CHARACTER SET utf8;
    //ALTER DATABASE quickco2022 CHARACTER SET utf8 COLLATE utf8_general_ci;
    /* user table */
    /*
    CREATE TABLE user (
      id varchar(255),
      realm varchar(255),
      username varchar(255),
      emailVerified BOOL,
      verificationToken varchar(255),
      email varchar(255),
      password varchar(255),
      isAdmin BOOL,
    );
    */
    // +-------------------+--------------+-------------------+------+-----+---------+-------+---------------------------------+---------+
    // | Field             | Type         | Collation         | Null | Key | Default | Extra | Privileges                      | Comment |
    // +-------------------+--------------+-------------------+------+-----+---------+-------+---------------------------------+---------+
    // | email             | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // | password          | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // | id                | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // | realm             | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // | username          | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // | emailVerified     | tinyint(1)   | NULL              | YES  |     | NULL    |       | select,insert,update,references |         |
    // | verificationToken | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // +-------------------+--------------+-------------------+------+-----+---------+-------+---------------------------------+---------+
    /*
    CREATE TABLE usercredentials (
      id varchar(255),
      password varchar(255),
      userId varchar(255)
    );
    */
    // +----------+--------------+-------------------+------+-----+---------+-------+---------------------------------+---------+
    // | Field    | Type         | Collation         | Null | Key | Default | Extra | Privileges                      | Comment |
    // +----------+--------------+-------------------+------+-----+---------+-------+---------------------------------+---------+
    // | id       | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // | password | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // | userId   | varchar(255) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references |         |
    // +----------+--------------+-------------------+------+-----+---------+-------+---------------------------------+---------+
    // Connectors usually keep a pool of opened connections,
    // this keeps the process running even after all work is done.
    // We need to exit explicitly.
    process.exit(0);
}
exports.migrate = migrate;
migrate(process.argv).catch(err => {
    console.error('Cannot migrate database schema', err);
    process.exit(1);
});
//# sourceMappingURL=migrate.js.map