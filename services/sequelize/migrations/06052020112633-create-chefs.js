module.exports.up = (queryInterface, DataTypes) => {
  // id, name, createdAt, updatedAt, deletedAt
  return queryInterface.createTable(
    "chefs",
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
  queryInterface.dropTable("chefs");
};
