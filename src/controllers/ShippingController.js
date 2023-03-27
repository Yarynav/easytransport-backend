const ShippingModel = require('../models/ShippingModel');

const getByClientId = async (req, res) => {
  try {
    const clientId = req.query.clientId;
    const shippings = await ShippingModel.getByClientId(clientId);
    res.json(shippings);
  } catch (e) {
    res.status(500).json({ message: e + '' });
  }
};

const getById = async (req, res) => {
  try {
    const shippingId = req.params.id;
    const shipping = await ShippingModel.getById(shippingId);
    res.json(shipping);
  } catch (e) {
    res.status(500).json({ message: e + '' });
  }
};

const update = async (req, res) => {
  try {
    const shippingId = req.params.id;
    const body = req.body;
    const shipping = await ShippingModel.update(shippingId, body);
    res.json(shipping);
  } catch (e) {
    res.status(500).json({ message: e + '' });
  }
};

const create = async (req, res) => {
  try {
    const {
      trip_id,
      transport_id,
      client_id,
      origin_address,
      destiny_address,
      date_retirement,
      time_ini_retirement,
      time_end_retirement,
      date_delivery,
      time_ini_delivery,
      time_end_delivery,
      type_load_shipping,
      cubic_meters_shipping,
      weight_shipping,
      long_load_shipping,
      wide_load_shipping,
      high_load_shipping,
    } = req.body;
    const response = await ShippingModel.create({
      trip_id,
      transport_id,
      client_id,
      origin_address,
      destiny_address,
      date_retirement,
      time_ini_retirement,
      time_end_retirement,
      date_delivery,
      time_ini_delivery,
      time_end_delivery,
      type_load_shipping,
      cubic_meters_shipping,
      weight_shipping,
      long_load_shipping,
      wide_load_shipping,
      high_load_shipping,
    });
    res.json({ msj: 'Creacion exitosa' });
  } catch (e) {
    res.status(500).json({ msj: e });
  }
};

module.exports = {
  getByClientId,
  update,
  getById,
  create,
};
