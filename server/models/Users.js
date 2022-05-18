import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        fullName: Sequelize.STRING,
        username: Sequelize.STRING,
        avatar: Sequelize.STRING,
        email: Sequelize.STRING,
        role: Sequelize.STRING,
        ability: {
          type: Sequelize.STRING,
          get() {
            const abilityString = this.getDataValue('ability');
            return JSON.parse(abilityString);
          },
          set(val) {
            this.setDataValue(JSON.parse(val));
          },
        },
        extras: {
          type: Sequelize.STRING,
          get() {
            const extrasString = this.getDataValue('extras');
            return JSON.parse(extrasString);
          },
          set(val) {
            this.setDataValue(JSON.parse(val));
          },
        },
        password: Sequelize.VIRTUAL, //When it is VIRTUAL it does not exist in the database
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'Users',
        timestamps: true, //If it's false do not add the attributes (updatedAt, createdAt).
        //paranoid: true, //If it's true, it does not allow deleting from the bank, but inserts column deletedAt. Timestamps need be true.
        //underscored: true, //If it's true, does not add camelcase for automatically generated attributes, so if we define updatedAt it will be created as updated_at.
        //freezeTableName: false, //If it's false, it will use the table name in the plural. Ex: Users
        tableName: 'Users' //Define table name
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    Users.hasMany(models.Addresses);
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Users;
