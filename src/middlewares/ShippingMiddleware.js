const shippingMiddleware = async (req, res, next) => {
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

    if (
      trip_id === undefined ||
      // transport_id === undefined ||
      client_id === undefined ||
      // origin_address === undefined ||
      // destiny_address === undefined ||
      // date_retirement === undefined ||
      // time_ini_retirement === undefined ||
      // time_end_retirement === undefined ||
      // date_delivery === undefined ||
      // time_ini_delivery === undefined ||
      // time_end_delivery === undefined ||
      // type_load_shipping === undefined ||
      cubic_meters_shipping === undefined ||
      weight_shipping === undefined ||
      long_load_shipping === undefined ||
      wide_load_shipping === undefined ||
      high_load_shipping === undefined ||
      trip_id === '' ||
      // transport_id === '' ||
      client_id === '' ||
      // origin_address === '' ||
      // destiny_address === '' ||
      // date_retirement === '' ||
      // time_ini_retirement === '' ||
      // time_end_retirement === '' ||
      // date_delivery === '' ||
      // time_ini_delivery === '' ||
      // time_end_delivery === '' ||
      // type_load_shipping === '' ||
      cubic_meters_shipping === '' ||
      weight_shipping === '' ||
      long_load_shipping === '' ||
      wide_load_shipping === '' ||
      high_load_shipping === ''
    ) {
      console.log(
        'falla',
        trip_id === undefined,
        client_id === undefined,
        cubic_meters_shipping === undefined,
        weight_shipping === undefined,
        long_load_shipping === undefined,
        wide_load_shipping === undefined,
        high_load_shipping === undefined,
        trip_id === '',
        client_id === ''
      );
      res.status(400).json({
        message:
          'No se han ingresado todos los datos para el registro de envío',
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al crear un nuevo envío' });
  }
};

module.exports = { shippingMiddleware };
