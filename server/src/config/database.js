require('dotenv/config');

module.exports = {
  dialect: "sqlite",
  username: "",
  password: "",
  storage: "./database/vanlio.db",
  define: {
    timestamps: true
  },
};