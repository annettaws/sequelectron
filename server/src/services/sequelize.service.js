import { Sequelize, QueryTypes} from "sequelize";
import fs from "fs";
const path = require('path');
const base = path.resolve('.');

const isProd = process.env.NODE_ENV === "production";
const resPath = process.resourcesPath;

const storageDbPath = isProd
  ? resPath + "/vanlio.db"
  : `${base}/src/database/vanlio.sqlite`;
// console.log("storageDbPath",storageDbPath);

const modelFiles = fs.readdirSync(`${base}/src/models`).filter(
  (file) => file.endsWith(".js")
)
const modelFilesPath = modelFiles.map(el => `${base}/src/models/${el}`)
// console.log(modelFilesPath)

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
          models: modelFilesPath,
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
        for (const file of modelFilesPath) {
        const model = await import(file);
        model.default.init(connection);
        // model.default.associate && model.default.associate(connection.models);

      }

      Address.associate && Address.associate(connection.models);
      User.associate && User.associate(connection.models);
      UserAddress.associate && UserAddress.associate(connection.models);

      console.log("[SEQUELIZE] Database service initialized");
    } catch (error) {
      console.log("[SEQUELIZE] Error during database service initialization");
      throw error;
    }
  },
};

export default sequelizeService;
