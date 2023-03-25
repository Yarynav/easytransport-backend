const { response } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const getTokenBody = (client) => {
  return {
    id: client.id,
    name: client.name,
    last_name: client.last_name,
    email: client.email,
    phone: client.phone,
    address: client.address,
    img: client.img,
    password: client.password,
    condition: client.condition,
    total_starts: client.total_starts,
    num_qualification: client.num_qualification,
    role: 'client',
  };
};

const login = async (req, res) => {
  let { email, password } = req.body;
  const client = await ClientModel.getByEmail(email);
  const passwordIsCorrect = bcrypt.compareSync(password, client.password);

  if (passwordIsCorrect && client) {
    const tokenPayload = getTokenBody(client);
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);
    res.send(token);
  } else {
    res.status(401).json({ message: 'Email o contraseña incorrecta' });
  }
};

const signin = async (req, res) => {
  let { email, password, name, last_name, phone, address, img } = req.body;
  // const previousUser = await UserModel.findByEmail(email, res);
  // if (previousUser.length > 0) {
  //   res.status(409).json({ message: 'El usuario ya existe' });
  //   return;
  // }
  password = bcrypt.hashSync(password);

  const response = await ClientModel.signin({
    email,
    password,
    name,
    last_name,
    phone,
    address,
    img,
  });
  res.json(response);
};

const list = async (req, res) => {
  const response = await ClientModel.list();
  res.json(response);
};

const getById = async (req, res) => {
  const id = req.params.id;
  const response = await ClientModel.getById(id);
  res.json(response);
};

const remove = async (req, res) => {
  const id = req.params.id;
  const response = await ClientModel.remove(id);
  res.json(response);
};

const update = async (req, res) => {
  const id = req.params.id;
  const response = await ClientModel.update(id);
  res.json(response);
};

const deleteByEmail = async (req, res) => {
  const email = req.params.email;
  const response = await ClientModel.deleteByEmail(email);
  res.json(response);
};

module.exports = {
  login,
  signin,
  list,
  getById,
  remove,
  update,
  deleteByEmail,
};
