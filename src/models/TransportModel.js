const { pool, format } = require('../helpers/database');

const getById = async (id) => {
  const query = 'SELECT * FROM transport WHERE id= %s ORDER BY id DESC';
  const formatQuery = format(query, id);
  const { rows } = await pool.query(formatQuery);
  return rows[0];
};

const getByEmail = async (email) => {
  try {
    const query = `SELECT * FROM transport WHERE email= '%s' ORDER BY id DESC`;
    const formatQuery = format(query, email);
    const { rows } = await pool.query(formatQuery);
    return rows[0];
  } catch (e) {
    console.log(e);
  }
};

const remove = async (id) => {
  const query = 'UPDATE transport SET deleted_at = true WHERE id = %s';
  const formatQuery = format(query, id);
  await pool.query(formatQuery);
};

const signin = async ({
  email,
  password,
  name,
  last_name,
  phone,
  address,
  img,
}) => {
  const query = `INSERT INTO transport 
  (email, password, name, last_name, phone, address, img) 
  VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s')`;
  const formatQuery = format(
    query,
    email,
    password,
    name,
    last_name,
    phone,
    address,
    img || ''
  );
  const { rows } = await pool.query(formatQuery);
  return rows[0];
};

const update = async ({ email, password, name, last_name, phone, address }) => {
  const query = `UPDATE transport SET 
  email= %s, password = %s, name = %s, last_name = %s, phone = %s, address = %s 
  WHERE id = %s
  `;
  const formatQuery = format(
    query,
    email,
    password,
    name,
    last_name,
    phone,
    address,
    id
  );
  const { rows } = await pool.query(formatQuery);
  return rows[0];
};

const list = async () => {
  const formatQuery = format('SELECT * FROM transport ORDER BY id DESC');
  const { rows } = await pool.query(formatQuery);
  return rows;
};

module.exports = { list, getById, getByEmail, signin, remove, update };