module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      name: {
        type: DataTypes.STRING,
        validate: {len: [1]},
        notNull: true
      },
      date: {
        type: DataTypes.DATE
      },
      description: {
        type: DataTypes.TEXT,
        notNull: true
      },
      max_attendees:{
          type: DataTypes.INTEGER
      }

    });

    Event.associate = function(models){
      Event.belongsTo(models.Community, {
        foreignKey:{
          allowNull: false
        }
      })
    }
 
    return Event; 
};
