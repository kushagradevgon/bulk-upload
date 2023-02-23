// import 'dotenv/config';
import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const pg = require('pg');
// pg.types.setTypeParser(20, 'text', parseInt);

module.exports = {
  client: "mysql",
      connection: {
        host: "sprintmoney-backup.czspjmtjzqci.ap-south-1.rds.amazonaws.com",
        port: 3306,
        database: "sprintmoney-dev",
        user: "admin",
        password: "DM3NA7btCVbCcCyqLyO0"
      },
  useNullAsDefault: true,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
    directory: './database/migrations',
    extension: 'ts',
  },
  ...knexSnakeCaseMappers(),
} as Knex.Config;
