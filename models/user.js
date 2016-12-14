const db = require('../lib/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function comparePWD (req, res, next) {
  db.one('SELECT * from users WHERE users.username = $1;',
    [req.body.username])
    .then((data) => {
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ username: req.body.username}, process.env.secret);
        res.status(200).json(myToken);
      } else {
        res.status(500).send('Login Failed');
      }
    })
};

function logOut (req, res, next) {
  res.send('logging out');
}

module.exports = { comparePWD };
