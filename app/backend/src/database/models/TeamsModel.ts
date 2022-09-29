import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Team extends Model {
  // public <campo>!: <tipo>;
  id!: number;
  teamName!: string;
}

Team.init({
  // ... Campos
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  teamName: {
    type: STRING,
    allowNull: false,
  },

}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'teams',
  timestamps: false,
});

export default Team;
