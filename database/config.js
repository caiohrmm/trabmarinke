const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("csvtomysql", "root", "joj123", {
  host: "localhost",
  dialect: "mysql", 
});

module.exports = sequelize;
