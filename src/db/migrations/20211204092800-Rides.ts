module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Rides',
      {
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
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      { schema: 'public' },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Rides');
  },
};
