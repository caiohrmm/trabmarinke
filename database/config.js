const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("csvtomysql", "root", "caio123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
