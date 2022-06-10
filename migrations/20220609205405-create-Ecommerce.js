"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Ecommerces", {
      uuid_ecommerce: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      description: {
        type: DataTypes.STRING(255),
      },
      national: {
        type: DataTypes.BOOLEAN,
      },
      modification_date: {
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Ecommerces");
  },
};