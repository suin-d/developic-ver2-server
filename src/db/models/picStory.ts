import { DataTypes, Model } from 'sequelize';
import { DbType } from '.';
import sequelize from './sequelize';

class PicStory extends Model {
  public readonly id!: string;

  public title!: string;
  public description!: string;
  public isPrivate!: boolean;
  public thumbnail?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PicStory.init(
  {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    isPrivate: {
      type: DataTypes.TINYINT(),
      allowNull: false,
      defaultValue: 0,
    },
    thumbnail: {
      type: DataTypes.STRING(128),
    },
  },
  {
    sequelize,
    tableName: 'PIC_STORY',
    modelName: 'PicStory',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);
export const associatePicStory = (db: DbType): void => {
  db.PicStory.belongsTo(db.User);
  db.PicStory.belongsToMany(db.Post, { through: 'STORY_POST' });
};
export default PicStory;
