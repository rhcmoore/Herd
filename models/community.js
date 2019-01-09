module.exports = function(sequelize, DataTypes) {
    var Community = sequelize.define("Community", {
      name: {
        type: DataTypes.STRING,
        validate: {len: [1]}
      },
      description: {
        type: DataTypes.TEXT,
        notNull: true,
        len: [1]
      }
    });
    
    Community.associate = function(models){
      // Community.belongsToMany(models.Event, {
      //   through: {model: models.communityEvent},
      //   foreignKey:'owner'
      // });
      Community.hasMany(models.Event, {
        onDelete: "cascade"
      });
    }
  
    return Community; 
};
