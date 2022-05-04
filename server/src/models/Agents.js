import Sequelize, { Model } from "sequelize";

class Agents extends Model {
  static init(sequelize) {
    super.init(
      {
        code: Sequelize.STRING,
        denomination: Sequelize.STRING,
        pec: Sequelize.BOOLEAN,
        uniqueCode: Sequelize.NUMBER,
        cf: Sequelize.STRING,
        piva: Sequelize.NUMBER,
        mail: Sequelize.NUMBER,
        phone: Sequelize.NUMBER,
        pecAddress: Sequelize.STRING,
        
      },
      {
        sequelize,
        modelName: 'Agents',
        timestamps: true, //If it's false do not add the attributes (updatedAt, createdAt).
        //paranoid: true, //If it's true, it does not allow deleting from the bank, but inserts column deletedAt. Timestamps need be true.
        //underscored: true, //If it's true, does not add camelcase for automatically generated attributes, so if we define updatedAt it will be created as updated_at.
        //freezeTableName: false, //If it's false, it will use the table name in the plural. Ex: Users
        tableName: 'Agents' //Define table name
      }
    );
 
    return this;
  }

  static associate(models) {
    Agents.hasMany(models.Addresses);
    Agents.belongsTo(models.Users);

  }

}

export default Agents;
