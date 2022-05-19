import Sequelize, { Model } from "sequelize";

class Documents extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.STRING,
        number: Sequelize.DATE,
        customer: Sequelize.STRING,
        cf: Sequelize.STRING,
        uniqueCode: Sequelize.NUMBER,
        piva: Sequelize.NUMBER,
        phone: Sequelize.NUMBER,
        mail: Sequelize.NUMBER,
        paymentMethod: Sequelize.STRING,
        notes: Sequelize.STRING,
        bodyType: Sequelize.STRING
        
      },
      {
        sequelize,
        modelName: 'Documents',
        timestamps: true, //If it's false do not add the attributes (updatedAt, createdAt).
        //paranoid: true, //If it's true, it does not allow deleting from the bank, but inserts column deletedAt. Timestamps need be true.
        //underscored: true, //If it's true, does not add camelcase for automatically generated attributes, so if we define updatedAt it will be created as updated_at.
        //freezeTableName: false, //If it's false, it will use the table name in the plural. Ex: Users
        tableName: 'Documents' //Define table name
      }
    );
 
    return this;
  }

}

export default Documents;
