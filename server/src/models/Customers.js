import Sequelize, { Model } from "sequelize";
import Addresses from "./Addresses";

class Customers extends Model {
  static init(sequelize) {
    super.init(
      {
        prefix: Sequelize.STRING,
        customer: Sequelize.STRING,
        cf: Sequelize.STRING,
        piva: Sequelize.NUMBER,
        uniqueCode: Sequelize.NUMBER,
        phone: Sequelize.NUMBER,
        mail: Sequelize.NUMBER,
        pec: Sequelize.STRING,
        discount: Sequelize.STRING,
        // plist: Sequelize.ARRAY,
        paymentMethod: Sequelize.STRING,
        agent: Sequelize.STRING,
        note: Sequelize.STRING,
        
      },
      {
        sequelize,
        modelName: 'Customers',
        timestamps: true, //If it's false do not add the attributes (updatedAt, createdAt).
        //paranoid: true, //If it's true, it does not allow deleting from the bank, but inserts column deletedAt. Timestamps need be true.
        //underscored: true, //If it's true, does not add camelcase for automatically generated attributes, so if we define updatedAt it will be created as updated_at.
        //freezeTableName: false, //If it's false, it will use the table name in the plural. Ex: Users
        tableName: 'Customers' //Define table name
      }
    );
 
    return this;
  }

  static associate(models) {
    Customers.hasMany(models.Addresses);
    Customers.belongsTo(models.Users)
  }

}

export default Customers;
