import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './TeamsModel';
// import OtherModel from './OtherModel';

class Matche extends Model {
  // public <campo>!: <tipo>;
  id!: number;
  homeTeam!: number;
  homeTeamGoals!:number;
  awayTeam!:number;
  awayTeamGoals!:number;
  inProgress!:boolean;
}

Matche.init({
  // ... Campos
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },

  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },

  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },

}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Matche.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Matche.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

Team.hasMany(Matche, { foreignKey: 'homeTeam', as: 'teamHome' });
Team.hasMany(Matche, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Matche;
