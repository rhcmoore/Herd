// THIS MODEL IS NOT YET BEING USED

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
      name:{
        type: DataTypes.STRING
      }
    }
    );
    return User; 
};
