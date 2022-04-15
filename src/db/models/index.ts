import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { dbConfigs } from '../config';
const basename = path.basename(__filename);

const db: { [key: string]: any } = {};

const sequelize = new Sequelize(dbConfigs.name, dbConfigs.username, dbConfigs.password, {
  dialect: dbConfigs.dialect,
});

fs.readdirSync(__dirname)
  .filter((file) => !file.startsWith('.') && file !== basename && file.endsWith('.ts'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => console.log('database is connected'))
  .catch((err) => {
    throw err;
  });

export default db;
