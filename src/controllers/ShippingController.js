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
    const response = await ShippingModel.create(req.body);
    res.json({ msj: 'Creacion exitosa' });
  } catch (e) {
    res.status(500).json({ msj: 'Ha ocurrido un error' });
  }
};

module.exports = {
  getByClientId,
  update,
  getById,
  create,
};
