import Sequelize, { Model } from "sequelize";

class Addresses extends Model {
  static init(sequelize) {
    super.init(
      {
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        country: Sequelize.STRING,
        address: Sequelize.STRING,
        cap: Sequelize.NUMBER,
        location: Sequelize.STRING,
        province: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Addresses",
        timestamps: true, //If it's false do not add the attributes (updatedAt, createdAt).
        //paranoid: true, //If it's true, it does not allow deleting from the bank, but inserts column deletedAt. Timestamps need be true.
        //underscored: true, //If it's true, does not add camelcase for automatically generated attributes, so if we define updatedAt it will be created as updated_at.
        //freezeTableName: false, //If it's false, it will use the table name in the plural. Ex: Users
        tableName: "Addresses", //Define table name
      }
    );

    return this;
  }

}
export default Addresses;