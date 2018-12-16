const { Grill } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const grills = await Grill.findAll({ limit: 10 });
      return res.send(grills);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to fetch grills',
      });
    }
  },
  async create(req, res) {
    try {
      const grill = await Grill.create(req.body);
      return res.send(grill);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to create the grill',
      });
    }
  },
};