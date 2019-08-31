'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    dislikeCount: DataTypes.INTEGER,
    likeCount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    videoId: DataTypes.STRING,
  }, {});
  Movies.associate = function(models) {
    // associations can be defined here
    Movies.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      as: 'user'
    })
  };
  return Movies;
};