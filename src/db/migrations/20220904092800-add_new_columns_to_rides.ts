module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      {
        tableName: 'Rides',
        schema: 'public',
      },
      'startLong',
      {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
    );
    await queryInterface.addColumn(
      {
        tableName: 'Rides',
        schema: 'public',
      },
      'startLat',
      {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
    );
    await queryInterface.addColumn(
      {
        tableName: 'Rides',
        schema: 'public',
      },
      'endLat',
      {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
    );
    await queryInterface.addColumn(
      {
        tableName: 'Rides',
        schema: 'public',
      },
      'endLong',
      {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
    );
  },

  async down() {
    return;
  },
};
