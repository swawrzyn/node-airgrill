module.exports = (sequelize) => {
  const Bookmark = sequelize.define('Bookmark', {});

  Bookmark.associate = (models) => {
    Bookmark.belongsTo(models.User);
    Bookmark.belongsTo(models.Grill);
  };

  return Bookmark;
};
