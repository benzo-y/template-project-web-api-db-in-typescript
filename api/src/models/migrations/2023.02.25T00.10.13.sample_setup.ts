import { DataTypes, Sequelize } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  const t = await sequelize.transaction();
  const queryInterface = sequelize.getQueryInterface();

  try {
    await queryInterface
      .createTable('users', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING(32), allowNull: false },
        email: { type: DataTypes.STRING(255), allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
      })
      .then(() => {
        return queryInterface.addIndex('users', {
          fields: ['username'],
          unique: true,
        });
      })
      .then(() => {
        return queryInterface.addIndex('users', {
          fields: ['email'],
          unique: true,
        });
      });
    await t.commit();
  } catch (error) {
    await t.rollback();
  }
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  const t = await sequelize.transaction();
  const queryInterface = sequelize.getQueryInterface();

  try {
    await queryInterface.dropTable('users');

    await t.commit();
  } catch (error) {
    await t.rollback();
  }
};
