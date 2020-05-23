const { Pool } = require('pg');

const pool = new Pool({
  user: 'me',
  password: 'me',
  host: 'localhost',
  database: 'items',
  port: '5432',
});


module.exports = {
  getImages(req, res) {
    const { id } = req.params;
    pool.query(`SELECT altImages FROM items WHERE itemId = ${id};`, (err, results) => {
      if (err) {
        return console.error(err);
      }
      return res.status(200).send(results.rows);
    });
  },
};
