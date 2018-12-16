module.exports = (sequelize, DataTypes) => {
  const Grill = sequelize.define('Grill', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    owner: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,
    },
  });

  return Grill;
};
