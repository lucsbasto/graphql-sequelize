module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "restaurants",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      chefId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          key: "id",
          model: "chefs"
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      chatset: "utf8"
    }
  );
};

module.exports.down = queryInterface => {
  return queryInterface.dropTable("restaurants");
};
