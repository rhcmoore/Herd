module.exports = function(sequelize, DataTypes) {
    var Community = sequelize.define("Community", {
      name: {
        type: DataTypes.STRING,
        validate: {len: [1]},
        notNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        notNull: true,
        len: [1]
      },
      image:{
        type: DataTypes.STRING
      }
    });
    
    Community.associate = function(models){
    
      Community.hasMany(models.Event, {
        onDelete: "cascade"
      });
    }
  
    return Community; 
};
