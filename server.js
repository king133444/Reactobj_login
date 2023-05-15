const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// 解析body中的数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 使用cors模块解决跨域问题
app.use(cors());

// 创建 MySQL 连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'users',
});

// 测试数据库连接是否正常
// pool.getConnection((err, conn) => {
//   if (err) {
//     console.log('和mysql数据库建立连接失败');
//   } else {
//     console.log('和mysql数据库连接成功');
//     conn.query('select * from users_info', (err, res) => {
//       if (err) {
//         console.log('查询数据库失败');
//       } else {
//         console.log(res);
//         pool.end();
//       }
//     });
//   }
// });

// 注册路由、完成注册功能
app.post('/register', (req, res) => {
const { username, password } = req.body;
// 查询数据库中是否已存在该用户
pool.query('SELECT * FROM users_info WHERE username = ?', [username], (error, results) => {
  if (error) {
    console.error(error);
    res.status(500).send('查询用户数据失败');
  } else if (results.length > 0) {
    res.status(400).send('用户已存在');
    console.log('用户已存在');
  } else {
    // 在 MySQL 数据库中插入用户数据
    pool.query('INSERT INTO users_info (username, password) VALUES (?, ?)', [username, password], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('用户注册失败');
      } else {
        res.status(200).send('用户注册成功');
      }
    });
  }
  });
});
// 登录路由、完成登录功能
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // 在 MySQL 数据库中查找用户数据
  pool.query('SELECT * FROM users_info WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('查询数据错误！');
      return;
    }

    if (results.length === 0) {
      res.status(401).send('未查找到该用户！');
      return;
    }

    const user = results[0];
    if (user.password === password) {
      res.status(200).send('登录成功');
    } else {
      res.status(401).send('密码错误');
    }
  });
});


app.listen(4000, () => {
  console.log('服务器运行在4000端口');
});
