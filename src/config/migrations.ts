const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  schema: 'public',
  dialect: 'postgres',
  development: {
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    schema: 'public',
    dialect: 'postgres',
  },
};
