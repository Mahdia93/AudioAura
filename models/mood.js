module.exports = function(sequelize, DataTypes) {
  var Mood = sequelize.define("Mood", {
    color: {
      type: DataTypes.STRING
    },
  });

  return Mood;
};
