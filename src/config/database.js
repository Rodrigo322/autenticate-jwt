require('dotenv/config')

module.exports = {
  dialect: process.env.APP_BANCO_DIALECT,
  host: process.env.APP_BANCO_HOST,
  username: process.env.APP_BANCO_USERNAME,
  password: process.env.APP_BANCO_PASSWORD, 
  database: process.env.APP_BANCO_NAME,
  define: {
    timestamps: true,
    underscored: true,
  }
}