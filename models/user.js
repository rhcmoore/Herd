
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

    User.associate = (models) =>{
      User.belongsToMany(models.Event, {
        through: {model: models.UserEvent}
      })
    }

    User.prototype.validPassword = function(password) {
        return ( this.password === password );
    }

    return User; 
};
