const { pool, format } = require('../helpers/database');

const login = async () => {};

const getById = async (id) => {
  const query = 'SELECT * FROM client WHERE id= %s ORDER BY id DESC';
  const formatQuery = format(query, id);
  const { rows } = await pool.query(formatQuery);
  return rows[0];
};

const remove = async (id) => {
  const query = 'UPDATE client SET deleted_at = true WHERE id = %s';
  const formatQuery = format(query, id);
  await pool.query(formatQuery);
};

const signin = async ({ email, password, name, last_name, phone, address }) => {
  const query = `INSERT INTO client 
  (email, password, name, last_name, phone, address) 
  VALUES (%s, %s, %s, %s, %s, %s)`;
  const formatQuery = format(
    query,
    email,
    password,
    name,
    last_name,
    phone,
    address
  );
  const { rows } = await pool.query(formatQuery);
  return rows[0];
};

const update = async ({ email, password, name, last_name, phone, address }) => {
  const query = `UPDATE client SET 
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
  const formatQuery = format('SELECT * FROM client ORDER BY id DESC');
  const { rows } = await pool.query(formatQuery);
  return rows;
};

module.exports = { login, list, getById, signin, remove, update };
