const { pool, format } = require('../helpers/database')

const create = async (
  truck_id,
  transport_id,
  driver_id,
  country_origin,
  country_destiny,
  city_origin,
  city_destiny,
  trip_date_ini,
  time_ini,
  time_end,
  trip_date_end,
  type_load,
  cubic_meters_trip,
  max_weight_trip,
  long_load_trip,
  wide_load_trip,
  high_load_trip
) => {
  try {
    const values = [
      truck_id,
      transport_id,
      driver_id,
      country_origin,
      country_destiny,
      city_origin,
      city_destiny,
      trip_date_ini,
      time_ini,
      time_end,
      trip_date_end,
      type_load,
      cubic_meters_trip,
      max_weight_trip,
      long_load_trip,
      wide_load_trip,
      high_load_trip,
    ]

    const consulta =
      'INSERT INTO trip values (DEFAULT, $1, $2, $3, $4, $5,$6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, DEFAULT, DEFAULT, DEFAULT, DEFAULT)'
    await pool.query(consulta, values)
  } catch (error) {
    console.log(error)
    return 'error'
  }
}

const update = async (
  truck_id,
  transport_id,
  driver_id,
  country_origin,
  country_destiny,
  city_origin,
  city_destiny,
  trip_date_ini,
  time_ini,
  time_end,
  trip_date_end,
  type_load_trip,
  cubic_meters_trip,
  max_weight_trip,
  long_load_trip,
  wide_load_trip,
  high_load_trip,
  id
) => {
  console.log(
    'estp recivi',
    truck_id,
    transport_id,
    driver_id,
    country_origin,
    country_destiny,
    city_origin,
    city_destiny,
    trip_date_ini,
    time_ini,
    time_end,
    trip_date_end,
    type_load_trip,
    cubic_meters_trip,
    max_weight_trip,
    long_load_trip,
    wide_load_trip,
    high_load_trip,
    id
  )
  try {
    const values = [
      truck_id,
      transport_id,
      driver_id,
      country_origin,
      country_destiny,
      city_origin,
      city_destiny,
      trip_date_ini,
      time_ini,
      time_end,
      trip_date_end,
      type_load_trip,
      cubic_meters_trip,
      max_weight_trip,
      long_load_trip,
      wide_load_trip,
      high_load_trip,
      id,
    ]
    const consulta =
      'UPDATE trip set  truck_id=$1, transport_id=$2, driver_id=$3,country_origin=$4, country_destiny=$5, city_origin=$6, city_destiny=$7, trip_date_ini=$8, time_ini=$9, time_end=$10, trip_date_end=$11, type_load_trip=$12, cubic_meters_trip=$13, max_weight_trip=$14, long_load_trip=$15, wide_load_trip=$16, high_load_trip=$17 WHERE id=$18'
    await pool.query(consulta, values)
  } catch (error) {
    return 'error'
  }
}

const remove = async (id) => {
  try {
    const values = [id]
    const consulta = 'DELETE FROM trip WHERE id=$1'
    await pool.query(consulta, values)
  } catch (error) {
    return 'error'
  }
}
const list = async (transport_id) => {
  try {
    const values = [transport_id]
    const consulta =
      'SELECT trip.id,truck_id,trip.transport_id,driver_id,country_origin,country_destiny,city_origin,city_destiny,trip_date_ini,time_ini,time_end,trip_date_end,type_load_trip,cubic_meters_trip,max_weight_trip, long_load_trip,wide_load_trip,high_load_trip,trip.status,truck.name AS truck_name,country_patent,patent,maken,model,color,driver.name AS driver_name,last_name  AS driver_last_name,phone,dni,img from trip INNER JOIN  truck ON trip.truck_id = truck.id INNER JOIN driver ON trip.driver_id = driver.id WHERE trip.deleted_at=false AND trip.transport_id=$1 ORDER BY trip.id DESC'

    const { rows } = await pool.query(consulta, values)
    return rows
  } catch (error) {
    return 'error'
  }
}

const softDelete = async (id) => {
  try {
    console.log('soy sofdetele y este es mi id', id)
    const values = [id]
    const consulta = 'UPDATE trip set deleted_at = true WHERE id=$1'
    await pool.query(consulta, values)
  } catch (error) {
    return 'error'
  }
}

const all = async () => {
  const formatQuery = format('SELECT * FROM trip ORDER BY id DESC')
  const { rows } = await pool.query(formatQuery)
  return rows
}

module.exports = { all, create, update, remove, softDelete, list }
