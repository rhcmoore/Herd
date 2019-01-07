module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      name: {
        type: DataTypes.STRING,
        validate: {len: [1]}
      },
      date: {
        type: DataTypes.DATE
      },
      description: {
        type: DataTypes.TEXT,
        validate: {len: [1]}
      },
      max_attendees:{
          type: DataTypes.INTEGER
      }

    }
    );
    return Event; 
};
