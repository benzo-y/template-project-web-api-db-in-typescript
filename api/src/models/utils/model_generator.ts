import { Sequelize, Op } from 'sequelize';
import { MyAppDB } from '../@types';
import schema from '../schema';

const generateModels = (sequelize: Sequelize): MyAppDB => {
  const db: any = {};

  const getModelByKey = (obj: { [anyKey: string]: any }, key: string): any =>
    obj[key];

  Object.keys(schema).forEach((tableName) => {
    const model = getModelByKey(schema, tableName);
    db[tableName] = model.factory(sequelize);
  });

  Object.keys(db).forEach((tableName) => {
    const model = getModelByKey(db, tableName);
    if (model.associate) {
      model.associate(db);
    }
  });

  return db;
};

export default { generateModels };
