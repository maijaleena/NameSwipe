const Sequelize = require("sequelize");
const pkg = require("../../package.json");

// const databaseName =
//   pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");


const config = {
  logging: true,
};

// const db = new Sequelize(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
//   config
// );

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/nameswipe', {
  logging: false
})

module.exports = db;
