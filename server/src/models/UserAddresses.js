import Sequelize, { Model } from "sequelize";

class UserAddresses extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        addressId: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "UserAddresses"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: "userId" });
    this.belongsTo(models.Addresses, { foreignKey: "addressId" });
  }
}

export default UserAddresses;
