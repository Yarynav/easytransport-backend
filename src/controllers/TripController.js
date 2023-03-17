const { response } = require('express');

const TripModel = require('../models/TripModel');

const all = async (req, res) => {
  const response = await TripModel.all();
  res.json(response);
};

module.exports = {
  all,
};
