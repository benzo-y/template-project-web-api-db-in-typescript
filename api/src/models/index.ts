import { Sequelize, Op } from 'sequelize';
import dbConfig from './config/config';
import modelGenerator from './utils/model_generator';

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
    port: 3306,
    logging: console.log,
    omitNull: true,
  }
);

const db = {
  ...modelGenerator.generateModels(sequelize),
  Sequelize,
  sequelize,
  Op,
};

export default db;
