module.exports = function(sequelize, DataTypes) {
    var Attendee = sequelize.define("Attendee", {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING
      }
    });

    Attendee.associate = function(models){
      Attendee.belongsTo(models.Event, {
        foreignKey:{
          allowNull: false
        }
      })
    }

    return Attendee; 
};
