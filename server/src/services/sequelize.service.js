import { Sequelize, QueryTypes} from "sequelize";
// import Users from "../models/Users";
// import Addresses from "../models/Addresses";
// import UserAddresses from "../models/UserAddresess";
//import fs from "fs";

const isProd = process.env.NODE_ENV === "production";
const resPath = process.resourcesPath;
const storageDbPath = isProd
  ? resPath + "/vanlio.db"
  : __dirname + "/../database/vanlio.db";
console.log(storageDbPath);

/*const modelFiles = fs
  .readdirSync(__dirname + "\\..\\src\\server\\src\\models\\")
  .filter((file) => file.endsWith(".js"));
console.log(modelFiles)*/
const modelFiles = ["Addresses", "Users", "UserAddresses", "Products", "Customers"];

const sequelizeService = {
  init: async () => {
    try {
      let connection = new Sequelize(
        "database",
        process.env.USER,
        process.env.PASSWORD,
        {
          host: "0.0.0.0",
          dialect: "sqlite",
          pool: {
            max: 5,
            min: 0,
            idle: 10000,
          },
          storage: storageDbPath,
        }
      );
      /*
        Loading models automatically
      */

      for (const file of modelFiles) {
        const model = await import(`../models/${file}.js`);
        model.default.init(connection);
      }
      /*Address.init(connection);
      User.init(connection);
      UserAddress.init(connection);*/

      modelFiles.map(async (file) => {
        const model = await import(`../models/${file}`);
        model.default.associate && model.default.associate(connection.models);
      });
      /*Address.associate && Address.associate(connection.models);
      User.associate && User.associate(connection.models);
      UserAddress.associate && UserAddress.associate(connection.models);*/

      console.log("[SEQUELIZE] Database service initialized");
    } catch (error) {
      console.log("[SEQUELIZE] Error during database service initialization");
      throw error;
    }
  },
};

export default sequelizeService;
