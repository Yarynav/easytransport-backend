const ClientModel = require('../models/ClientModel');

/** Campos del modelo client */
// "id"
// "name"
// "last_name"
// "email"
// "phone"
// "address"
// "img"
// "password"
// "condition"
// "total_starts"
// "num_qualification"
// "created_at"
// "updated_at"
// "deleted_at"

const login = async (req, res) => {
  response = await ClientModel.login();
  res.json(response);
};

const signin = async (req, res) => {
  const { email, password, name, last_name, phone, address } = req.body;
  response = await ClientModel.sigin({
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
  response = await ClientModel.list();
  res.json(response);
};

const getById = async (req, res) => {
  const id = req.params.id;
  response = await ClientModel.getById(id);
  res.json(response);
};

const remove = async (req, res) => {
  const id = req.params.id;
  response = await ClientModel.remove(id);
  res.json(response);
};

const update = async (req, res) => {
  const id = req.params.id;
  response = await ClientModel.update(id);
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
