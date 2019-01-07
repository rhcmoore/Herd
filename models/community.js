module.exports = function(sequelize, DataTypes) {
    var Community = sequelize.define("Community", {
      name: {
        type: DataTypes.STRING,
        validate: {len: [1]}
      },
      description: {
        type: DataTypes.TEXT,
        validate: {len: [1]}
      }
    }
    );
    return Community; 
};
