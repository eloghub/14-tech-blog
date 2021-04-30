const {Model, DataTypes} = require ("sequelize");

const sequelize = require ("../config/connection");

class Post extends Model {};

Post.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
},
{sequelize,
    timestamp: true,
    modelName: "post",
});

module.export = Post;

