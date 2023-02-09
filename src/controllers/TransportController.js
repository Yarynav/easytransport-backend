const TransportModel = require('../models/TransportModel');

const login = async (req, res) => {
  response = await TransportModel.login();
  res.json(response);
};

const signin = async (req, res) => {
  const { email, password, name, last_name, phone, address } = req.body;
  response = await TransportModel.sigin({
    email,
    password,
    name,
    last_name,
    phone,
    address,
  });
  res.json(response);
};

const list = async (req, res) => {
  response = await TransportModel.list();
  res.json(response);
};

const getById = async (req, res) => {
  const id = req.params.id;
  response = await TransportModel.getById(id);
  res.json(response);
};

const remove = async (req, res) => {
  const id = req.params.id;
  response = await TransportModel.remove(id);
  res.json(response);
};

const update = async (req, res) => {
  const id = req.params.id;
  response = await TransportModel.update(id);
  res.json(response);
};

module.exports = {
  login,
  signin,
  list,
  getById,
  remove,
  update,
};
