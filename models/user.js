// THIS MODEL IS NOT YET BEING USED
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      Username: {
        type: DataTypes.STRING,
        validate: {len: [1]}
      },
      Password: {
        type: DataTypes.STRING
      }
    }
    );
    return User; 
};
