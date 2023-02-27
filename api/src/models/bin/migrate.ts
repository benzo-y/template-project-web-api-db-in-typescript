import * as fs from 'fs';
import * as path from 'path';
import { Umzug, SequelizeStorage } from 'umzug';
import db from '../index';

const umzug = new Umzug({
  migrations: { glob: path.join(__dirname, '../migrations/*.{ts,js}') },
  context: db.sequelize,
  storage: new SequelizeStorage({ sequelize: db.sequelize }),
  logger: console,
  create: {
    folder: path.join(__dirname, '../migrations'),
    template: (filepath) => [
      [
        filepath,
        fs
          .readFileSync(path.join(__dirname, '../templates/sampleMigration.ts'))
          .toString(),
      ],
    ],
  },
});

(async () => {
  await umzug.runAsCLI();
})();
