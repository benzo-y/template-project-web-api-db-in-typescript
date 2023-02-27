import { Sequelize, Model, DataTypes } from 'sequelize';

const TABLE_NAME = 'users';

class Users extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public created_at!: Date;
  public updated_at!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: TABLE_NAME,
        underscored: true,
        sequelize: sequelize,
      }
    );
  }
}

const factory = (sequelize: Sequelize) => {
  Users.initialize(sequelize);

  return Users;
};

const associate = () => {};

export { Users, factory, associate };
