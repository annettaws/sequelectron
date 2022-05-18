require('dotenv/config');

module.exports = {
  dialect: "sqlite",
  username: "",
  password: "",
  storage: "../database/vanlio.sqlite",
  define: {
    timestamps: true
  },
};