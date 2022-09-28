import { Model, DataTypes } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class User extends Model {
  // public <campo>!: <tipo>;
  public id!: number; 
  public username!: string;
  public email!:string;
  public role!:string;
  public password!:string;
}

User.init({
  // ... Campos
 id: DataTypes.NUMBER, 
 username: DataTypes.STRING,
 email:DataTypes.STRING,
 role:DataTypes.STRING,
 password:DataTypes.STRING,
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'User',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS: 
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Example;