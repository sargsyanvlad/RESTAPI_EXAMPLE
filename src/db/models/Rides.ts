const { DataTypes: Sequelize } = require('sequelize');

const ridesModel = {
  rideId: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  driverName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  driverVehicle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  startLong: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  startLat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  endLat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  endLong: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
};

const ridesOptions = {
  timestamps: false,
  schema: 'public',
  freezeTableName: true,
};

module.exports = (seq) => {
  return seq.define('Rides', ridesModel, ridesOptions);
};
