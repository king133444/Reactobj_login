// db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
 
  username: 'root',
  password: '123456',
  database: 'users',
});
sequelize.authenticate()
 .then(() => {
   console.log('链接成功')
}).catch(() => {
   console.log("链接失败")
})
module.exports = sequelize;
