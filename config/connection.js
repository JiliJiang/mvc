require('dotenv').config();
const Sequelize = require('sequelize');

console.log(process.env.DB_user)

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('blog_db', 'root', '', {
      host: "localhost",
      dialect: "mysql",
      port: 3306
    });

module.exports = sequelize;
