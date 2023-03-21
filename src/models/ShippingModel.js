const { pool, format } = require('../helpers/database');

const getByClientId = async (clientId) => {
  const formatQuery = format(
    `SELECT 
      s.id, s.origin_address, s.destiny_address, s.transport_id, s.client_id, s.status,
      c.name AS client_name,
      c.last_name AS client_last_name,
      c.email AS client_email,
      c.phone AS client_phone,
      t.name AS transport_name,
      t.last_name AS transport_last_name,
      t.email AS transport_email,
      t.phone AS transport_phone
    FROM shipping s 
    LEFT JOIN client c ON c.id = s.client_id
    LEFT JOIN transport t ON t.id = s.transport_id
    WHERE 
      s.client_id = '%s' AND 
      s.deleted_at = false
    ORDER BY id DESC`,
    [clientId]
  );
  const { rows } = await pool.query(formatQuery);
  return rows;
};

const getById = async (id) => {
  const formatQuery = format(`SELECT * from shipping WHERE id = '%s'`, [id]);
  const { rows } = await pool.query(formatQuery);
  return rows[0];
};

const update = async (
  shippingId,
  {
    cubic_meters_shipping,
    high_load_shipping,
    long_load_shipping,
    wide_load_shipping,
  }
) => {
  const query = `UPDATE shipping SET 
    cubic_meters_shipping = %s, 
    long_load_shipping = %s,
    high_load_shipping = %s,
    wide_load_shipping = %s
    WHERE id = %s`;
  const formatQuery = format(
    query,
    cubic_meters_shipping,
    long_load_shipping,
    high_load_shipping,
    wide_load_shipping,
    shippingId
  );
  await pool.query(formatQuery);
  return await getById(shippingId);
};

module.exports = { getByClientId, getById, update };