import { DataTypes, Sequelize } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  const t = await sequelize.transaction();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryInterface = sequelize.getQueryInterface();

  try {
    await sequelize.query("raise fail('up migration not implemented')");

    await t.commit();
  } catch (error) {
    await t.rollback();
  }
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  const t = await sequelize.transaction();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryInterface = sequelize.getQueryInterface();

  try {
    await sequelize.query("raise fail('down migration not implemented')");

    await t.commit();
  } catch (error) {
    await t.rollback();
  }
};
