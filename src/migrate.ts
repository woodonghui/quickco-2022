import {QuickcoApplication} from './application';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  console.log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new QuickcoApplication();
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
  CREATE TABLE User (
    id varchar(255),
    realm varchar(255),
    username varchar(255),
    emailVerified BOOL,
    verificationToken varchar(255),
    email varchar(255),
    password varchar(255),
    isAdmin BOOL
  );
  */

  // ALTER TABLE tablename CONVERT TO CHARACTER SET latin1;


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
  CREATE TABLE UserCredentials (
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


  /*
  CREATE TABLE Employee (
    id int NOT NULL AUTO_INCREMENT,
    fullname varchar(512) NOT NULL,
    nickname varchar(512) NOT NULL,
    finno varchar(512),
    wpno varchar(512),
    joindate datetime,
    PRIMARY KEY (id)
  );

  CREATE TABLE WorkLog (
    id int NOT NULL AUTO_INCREMENT,
    employeeid int NOT NULL,
    outletid int NOT NULL,
    date datetime NOT NULL,
    worklog int NOT NULL,
    PRIMARY KEY (id)
  );

  */
  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
