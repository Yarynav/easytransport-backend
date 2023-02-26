const { pool, format } = require('../helpers/database');

const all = async () => {
  const formatQuery = format('SELECT * FROM trip ORDER BY id DESC');
  const { rows } = await pool.query(formatQuery);
  return rows;
};

module.exports = { all };
