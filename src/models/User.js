const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async client => {
      if (client.password) {
        client.password_hash = await bcrypt.hash(client.password, 8);
      }
    });
    return this;
  }
}

module.exports = User;