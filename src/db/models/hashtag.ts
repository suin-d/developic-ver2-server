import { DataTypes, Model } from 'sequelize';
import { DbType } from '.';
import sequelize from './sequelize';

class HashTag extends Model {
  public readonly id!: string;

  public name!: string;
  public hits!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

HashTag.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    hits: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'HASH_TAG',
    modelName: 'HashTag',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);
export const associateHashTag = (db: DbType): void => {
  db.HashTag.hasMany(db.HashTagLog);
  db.HashTag.belongsToMany(db.Post, { through: 'POST_HASHTAG' });
};
export default HashTag;
